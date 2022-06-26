<template>
  <el-drawer v-model="store.drawer" title="My wallet" direction="rtl" @open="openDrawer()">
    <el-card class="connectMetamask" shadow="hover" @click="connectMetamask()">
      <span>MetaMask</span>
      <span class="net">please choose rinkeby</span>
    </el-card>

    <el-tooltip content="copy" placement="top">
      <el-card class="copyAccount" shadow="hover" @click="copyAccount()">
        <span>Account:</span>
        <span class="account">{{ `${store.account.substring(0, 4)}...${store.account.substring(store.account.length -
            4)}`
        }}</span>
      </el-card>
    </el-tooltip>


    <div class="balance">
      <el-card shadow="never"> <span>LuuToken</span> <span class="sum">{{ store.LuuTokenBalance }}</span></el-card>
      <el-card shadow="never"> <span>ETH</span> <span class="sum">0</span></el-card>
      <el-card shadow="never"> <span>USDT</span> <span class="sum">0</span></el-card>
    </div>
  </el-drawer>

</template>

<script lang="ts" setup>
import { LuuTokenAddress, provider, signer, useStore } from '../../store/index';
import { BigNumber, ethers } from "ethers";
import { ElMessage } from 'element-plus';
import { LuuToken__factory } from '../../../../contract/src/types/factories/contracts/LuuToken__factory';
import { LuuToken } from '../../../../contract/src/types/contracts/LuuToken';

const store = useStore()

async function connectMetamask(): Promise<boolean> {
  if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
  } else {
    console.log('Please install MetaMask!');
    ElMessage('Please install MetaMask!')
    return false;
  }

  provider = new ethers.providers.Web3Provider(window.ethereum)
  console.log(await provider.getBlockNumber());

  const accounts = <string[]>await store.provider.send("eth_requestAccounts", []);
  if (provider && accounts.length !== 0) {
    store.account = accounts[0];
    signer = provider.getSigner()
    console.log(`account:${accounts[0]}`);
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

async function getBalanceOfLtk() {
  if (provider && signer && store.account !== "") {
    const luuTokenContract = new ethers.Contract(LuuTokenAddress, LuuToken__factory.abi, store.signer) as LuuToken;
    console.log(store.account);
    // await store.provider.getBlockNumber()
    // console.log(await store.provider.getBlockNumber());
    // await luuTokenContract.balanceOf("0xda4d32877a70f3a4490008df66f2dd988451a431")

    // const abc = (await luuTokenContract.balanceOf(store.account)).toNumber
    // console.log("type" + typeof (abc));
  } else {
    console.log('Please connect MetaMask!');
  }
}

function openDrawer() {
  console.log("openDrawer");
  getBalanceOfLtk()

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
