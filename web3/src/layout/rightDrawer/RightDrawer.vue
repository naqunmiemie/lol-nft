<template>
  <el-drawer v-model="store.drawer" title="My wallet" direction="rtl" @open="openDrawer()">
    <el-tooltip content="connect" placement="top">
      <el-card class="connectMetamask" shadow="hover" @click="connectMetamask()">
        <span>MetaMask</span>
        <span class="net">please choose rinkeby</span>
      </el-card>
    </el-tooltip>

    <el-tooltip content="copy" placement="top">
      <el-card class="copyAccount" shadow="hover" @click="copyAccount()">
        <span>Account:</span>
        <span class="account">{{ `${store.account.substring(0, 4)}...${store.account.substring(store.account.length -
            4)}`
        }}</span>
      </el-card>
    </el-tooltip>

    <div class="balance">
      <el-card shadow="never"> <span>LuuToken</span> <span class="sum">{{ store.luuTokenBalanceStr }}</span></el-card>
      <el-card shadow="hover" @click="store.buyLtkByEthDialog = true"> <span>ETH</span> <span class="sum">{{
          store.ethBalanceStr
      }}</span></el-card>
      <el-card shadow="hover" @click="store.buyLtkByUsdtDialog = true"> <span>USDT</span> <span class="sum">{{
          store.usdtBalanceStr
      }}</span></el-card>
    </div>

  </el-drawer>

  <BuyLtkByEthDialog></BuyLtkByEthDialog>
  <BuyLtkByUsdtDialog></BuyLtkByUsdtDialog>


</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { ethers } from "ethers";
import { markRaw } from 'vue';
import { LuuToken } from '../../../../contract/src/types/contracts/LuuToken';
import { LuuToken__factory } from '../../../../contract/src/types/factories/contracts/LuuToken__factory';
import { useStore } from '../../store/index';
import { LuuTokenAddress } from '../../utils/conctract/SomeAddress';
import { UsdtAddress, UsdtAbi } from '../../utils/conctract/usdtAddrAbi';
import { IERC20 } from '../../../../contract/src/types/@openzeppelin/contracts/token/ERC20/IERC20';
import BuyLtkByEthDialog from './BuyLtkByEthDialog.vue';
import BuyLtkByUsdtDialog from './BuyLtkByUsdtDialog.vue';

const store = useStore()

async function connectMetamask(): Promise<boolean> {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  } else {
    ElMessage('Please install MetaMask!')
    return false;
  }

  store.provider = markRaw(new ethers.providers.Web3Provider(window.ethereum))

  const accounts = <string[]>await store.provider.send("eth_requestAccounts", []);
  if (store.provider && accounts.length !== 0) {
    store.account = accounts[0];
    store.signer = store.provider.getSigner()
    console.log(`account:${accounts[0]}`);
    getBalance();
    return true;
  } else {
    console.log(`no authorized accoutn found`);
    ElMessage({ message: 'no authorized accoutn found', type: 'warning' })
    return false;
  }
}

async function copyAccount() {
  await navigator.clipboard.writeText(store.account)
}

async function getBalance() {
  if (store.provider && store.signer && store.account !== "") {
    //getBalanceOfLtk
    const luuTokenContract = new ethers.Contract(LuuTokenAddress, LuuToken__factory.abi, store.signer) as LuuToken;
    store.luuTokenBalance = (await luuTokenContract.balanceOf(store.account)).toString()
    //getBalanceOfEth
    store.ethBalance = (await store.provider.getBalance(store.account)).toString();
    //getBalanceOfUsdt
    const usdtContract = new ethers.Contract(UsdtAddress, UsdtAbi, store.signer) as IERC20;
    store.usdtBalance = (await usdtContract.balanceOf(store.account)).toString()

  } else {
    console.log('Please connect MetaMask!');
  }
}

function openDrawer() {
  console.log("openDrawer");
  getBalance()
}

</script>


<style lang='scss' scoped>
.connectMetamask {
  cursor: pointer;
}

.copyAccount {
  cursor: pointer;
}

.account {
  float: right;
}

.net {
  font-size: small;
  float: right;
}

.balance {
  margin-top: 30px;

  .sum {
    float: right;
  }
}

.buyLuuTokenButton {
  margin-top: 30px;
}
</style>
