<template>
  <el-dialog v-model="store.buyLtkByUsdtDialog" title="Buy LuuToken By Usdt" width="30%">

    <div class="inputNumUsdt">
      <el-input-number size="large" v-model="num" :precision="4" :step="0.0001" :min="0.0001" />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="buyLtkByUsdt()">Confirm</el-button>
        <el-button @click="store.buyLtkByUsdtDialog = false">Cancel</el-button>
      </span>
    </template>


  </el-dialog>
</template>

<script lang="ts" setup>
import { ethers } from 'ethers';
import { ref } from 'vue';
import { IERC20 } from '../../../../contract/src/types/@openzeppelin/contracts/token/ERC20/IERC20';
import { LuuToken } from '../../../../contract/src/types/contracts/LuuToken';
import { LuuToken__factory } from '../../../../contract/src/types/factories/contracts/LuuToken__factory';
import { useStore } from '../../store';
import { LuuTokenAddress } from '../../utils/conctract/SomeAddress';
import { UsdtAbi, UsdtAddress } from '../../utils/conctract/usdtAddrAbi';

const store = useStore()
const num = ref(0.0001)

async function buyLtkByUsdt() {
  if (store.provider && store.signer && store.account !== "") {
    const usdtContract = new ethers.Contract(UsdtAddress, UsdtAbi, store.signer) as IERC20;

    usdtContract.once("Approval", async (owner, spender, value) => {
      console.log(`Approval success`);
      if (spender === LuuTokenAddress && store.provider && store.signer && store.account !== "") {
        const luuTokenContract = new ethers.Contract(LuuTokenAddress, LuuToken__factory.abi, store.signer) as LuuToken;
        await luuTokenContract.buyLuuTokenByUsdt(value)
      }
    });
    await usdtContract.approve(LuuTokenAddress, num.value * (10 ** 18))
  } else {
    console.log('Please connect MetaMask!');
  }
  store.buyLtkByUsdtDialog = false
}

</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.inputNumUsdt {
  text-align: center;
}
</style>
