<script setup lang="ts">
import { Ref, ref } from 'vue'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { BigNumber, ethers } from "ethers";
import { usdtAbi, usdtAddress } from '../../../contract/src/abis/usdtAbi';
import { LuuToken } from '../../../contract/src/types/contracts/LuuToken';
import { LuuToken__factory } from '../../../contract/src/types/factories/contracts/LuuToken__factory';
import { ElMessage } from 'element-plus';

var provider: Web3Provider;
var signer: JsonRpcSigner;
var account: Ref<string> = ref("");
var luuTokenAddress: string = "";


async function connectMetamask(): Promise<boolean> {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    } else {
        ElMessage('Please install MetaMask!')
        return false;
    }

    provider = new ethers.providers.Web3Provider(window.ethereum)

    const accounts = <string[]>await provider.send("eth_requestAccounts", []);
    if (accounts.length !== 0) {
        account.value = accounts[0];
        signer = provider?.getSigner()
        console.log(`account:${accounts[0]}`);
        return true;
    } else {
        console.log(`no authorized accoutn found`);
        return false;
    }
}

async function getBalanceOfLtk(): Promise<BigNumber | null> {
    if (provider !== undefined && signer !== undefined && account.value !== "") {
        const luuTokenContract = new ethers.Contract(luuTokenAddress, LuuToken__factory.abi, signer) as LuuToken;
        return await luuTokenContract.balanceOf(account.value)
    } else {
        console.log('Please connect MetaMask!');
        return null;
    }
}


</script>

<template>
    <h1>User</h1>

    <div>
        <button @click="connectMetamask()">connectMetamask</button>
        <span>Account: {{ account }}</span>
    </div>
    <!-- <div>
        <input v-model="input" placeholder="edit me" />
        <button @click="setGreeting()">setGreeter</button>
    </div> -->
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: rgba(238, 238, 238, 0);
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
