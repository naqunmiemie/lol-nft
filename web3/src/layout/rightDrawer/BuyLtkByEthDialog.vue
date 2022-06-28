<template>
  <el-dialog v-model="store.buyLtkByEthDialog" title="Buy LuuToken By Eth" width="30%">

    <div class="inputNumEth">
      <el-input-number size="large" v-model="num" :precision="4" :step="0.0001" :min="0.0001" />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="buyLtkByEth()">Confirm</el-button>
        <el-button @click="store.buyLtkByEthDialog = false">Cancel</el-button>
      </span>
    </template>


  </el-dialog>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { ethers, PayableOverrides, utils } from 'ethers';
import { ref } from 'vue';
import { LuuToken } from '../../../../contract/src/types/contracts/LuuToken';
import { LuuToken__factory } from '../../../../contract/src/types/factories/contracts/LuuToken__factory';
import { useStore } from '../../store';
import { LuuTokenAddress } from '../../utils/conctract/luuTokenAddr';

const store = useStore()
const num = ref(0.0001)

async function buyLtkByEth() {
  if (store.provider && store.signer && store.account !== "") {
    const luuTokenContract = new ethers.Contract(LuuTokenAddress, LuuToken__factory.abi, store.signer) as LuuToken;
    let overrides: PayableOverrides = { value: utils.parseEther(num.value.toString()) };
    await luuTokenContract.buyLuuTokenByEth(overrides)

  } else {
    console.log('Please connect MetaMask!');
    ElMessage({ message: 'Please connect MetaMask!' })
  }
  store.buyLtkByEthDialog = false
}

</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.inputNumEth {
  text-align: center;
}
</style>
