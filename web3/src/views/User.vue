<script setup lang="ts">
import { Ref, ref } from 'vue'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { ethers } from "ethers";
import { usdtAbi, usdtAddress } from '../../../contract/src/abis/usdtAbi';

var provider: Web3Provider;
var signer: JsonRpcSigner;
var account: Ref<string> = ref("");


async function connectMetamask(): Promise<boolean> {
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
    } else {
        console.log('Please install MetaMask!');
        return false;
    }

    // provider = new ethers.providers.Web3Provider(window.ethereum)

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

async function getBalanceOfLtk() {


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
