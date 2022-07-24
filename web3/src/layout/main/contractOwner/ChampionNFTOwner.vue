<template>
    <span>
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>ChampionNFT</span>
                    <span class="contractState">{{ store.championNFTContractStateStr }}</span>

                    <div class="stateButton">
                        <el-button class="button" type="primary" text @click="UnpauseChampionNFT()">Unpause</el-button>
                        <el-button class="button" type="danger" text @click="PauseChampionNFT()">Pause</el-button>
                    </div>

                </div>
            </template>
            <div class="item">
                <el-input v-model="uri" placeholder="Please input uri" clearable />
                <el-button type="primary" text @click="mintNFT()">Mint</el-button>
            </div>
        </el-card>
    </span>
</template>

<script setup lang='ts'>
import { ethers } from 'ethers';
import { useStore } from '../../../store/index';
import { ChampionNFTAddress } from '../../../utils/conctract/SomeAddress';
import { ChampionNFT } from '../../../../../contract/src/types/contracts/ChampionNFT';
import { ChampionNFT__factory } from '../../../../../contract/src/types/factories/contracts/ChampionNFT__factory';
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus';

const uri = ref('')
const store = useStore()

async function UnpauseChampionNFT() {
    if (store.provider && store.signer) {
        const championNFTContract = new ethers.Contract(ChampionNFTAddress, ChampionNFT__factory.abi, store.signer) as ChampionNFT;
        if (await championNFTContract.paused()) {
            await championNFTContract.unpause()
            getChampionNFTContractState()
        } else {
            console.log("championNFTContract is running");
        }
    } else {
        console.log('Please connect MetaMask!');
    }
}

async function PauseChampionNFT() {
    if (store.provider && store.signer) {
        const championNFTContract = new ethers.Contract(ChampionNFTAddress, ChampionNFT__factory.abi, store.signer) as ChampionNFT;
        if (await championNFTContract.paused()) {
            console.log("championNFTContract has been paused");
        } else {
            await championNFTContract.pause()
            getChampionNFTContractState()
        }
    } else {
        console.log('Please connect MetaMask!');
    }
}

async function getChampionNFTContractState() {
    if (store.provider && store.signer) {
        const championNFTContract = new ethers.Contract(ChampionNFTAddress, ChampionNFT__factory.abi, store.signer) as ChampionNFT;
        store.championNFTContractState = await championNFTContract.paused()
        console.log('getChampionNFTContractState');
    } else {
        console.log('Please connect MetaMask!');
    }
}

function mintNFT() {
    ElMessageBox.confirm(
        uri.value,
        'Mint NFT',
        {
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel',
            type: 'info',
        }
    ).then(() => {
        mintChampionNFT()
    }).catch(() => {
        console.log("No");
    })
}

async function mintChampionNFT() {
    if (store.provider && store.signer) {
        const championNFTContract = new ethers.Contract(ChampionNFTAddress, ChampionNFT__factory.abi, store.signer) as ChampionNFT;
        await championNFTContract.mintToContract(uri.value)
        console.log('mintChampionNFT');
    } else {
        console.log('Please connect MetaMask!');
    }
}

</script>

<style lang='scss' scoped>
.card-header {
    display: flex;
    align-items: center;
}

.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box-card {
    width: 480px;
}

.contractState {
    margin-left: 10px;
}

.stateButton {
    margin-left: auto;
}
</style>
