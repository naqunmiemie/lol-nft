<template>
  <el-drawer class="drawer" v-model="store.drawer" title="My wallet" direction="rtl" color="black">
    <el-card class="connectMetamask" shadow="hover" @click="connectMetamask()">
      <span>MetaMask</span>
      <span class="net">please choose rinkeby</span>
    </el-card>

    <el-tooltip content="copy" placement="top">
      <el-card class="copyAccount" shadow="hover" @click="copyAccount()"> <span>Account:</span>
        <span>{{`${store.account.substring(0,4)}...${store.account.substring(store.account.length-4)}`}}</span>
      </el-card>
    </el-tooltip>


    <div class="balance">
      <el-card shadow="never"> <span>LuuToken</span> <span class="sum">0</span></el-card>
      <el-card shadow="never"> <span>ETH</span> <span class="sum">0</span></el-card>
      <el-card shadow="never"> <span>USDT</span> <span class="sum">0</span></el-card>
    </div>
  </el-drawer>

</template>

<script lang="ts" setup>
import { useStore } from '../../store/index';
import { BigNumber, ethers } from "ethers";
import { ElMessage } from 'element-plus'

const store = useStore()

async function connectMetamask(): Promise<boolean> {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  } else {
    console.log('Please install MetaMask!');
    ElMessage('Please install MetaMask!')
    return false;
  }

  store.provider = new ethers.providers.Web3Provider(window.ethereum)

  const accounts = <string[]>await store.provider.send("eth_requestAccounts", []);
  if (store.provider && accounts.length !== 0) {
    store.account = accounts[0];
    store.signer = store.provider.getSigner()
    console.log(`account:${accounts[0]}`);
    return true;
  } else {
    console.log(`no authorized accoutn found`);
    ElMessage('no authorized accoutn found')
    return false;
  }
}


async function copyAccount() {
  await navigator.clipboard.writeText(store.account)
}

</script>


<style lang='scss' scoped>
.connectMetamask {
  cursor: pointer;
}

.copyAccount {
  cursor: pointer;
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
