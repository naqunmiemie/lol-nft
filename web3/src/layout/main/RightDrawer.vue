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
      <el-card shadow="never"> <span>LuuToken</span> <span class="sum">{{ store.luuTokenBalance }}</span></el-card>
      <el-card shadow="never"> <span>ETH</span> <span class="sum">{{ store.ethBalance }}</span></el-card>
      <el-card shadow="never"> <span>USDT</span> <span class="sum">{{ store.usdtBalance }}</span></el-card>
    </div>
  </el-drawer>

</template>

<script lang="ts" setup>
import { LuuTokenAddress, useStore } from '../../store/index';
import { BigNumber, ethers } from "ethers";
import { ElMessage } from 'element-plus';
import { LuuToken__factory } from '../../../../contract/src/types/factories/contracts/LuuToken__factory';
import { LuuToken } from '../../../../contract/src/types/contracts/LuuToken';
import { markRaw } from 'vue';

const store = useStore()

async function connectMetamask(): Promise<boolean> {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  } else {
    console.log('Please install MetaMask!');
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

function getBalance() {
  getBalanceOfEth()
  getBalanceOfLtk()
}

async function getBalanceOfLtk() {
  if (store.provider && store.signer && store.account !== "") {
    const luuTokenContract = new ethers.Contract(LuuTokenAddress, LuuToken__factory.abi, store.signer) as LuuToken;
    await luuTokenContract.balanceOf("0xda4d32877a70f3a4490008df66f2dd988451a431")
    store.luuTokenBalance = (await luuTokenContract.balanceOf(store.account)).toString()
  } else {
    console.log('Please connect MetaMask!');
  }
}

async function getBalanceOfEth() {
  if (store.provider && store.signer && store.account !== "") {
    store.ethBalance = (await store.provider.getBalance(store.account)).toString();
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
</style>
