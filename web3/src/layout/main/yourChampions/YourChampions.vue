<template>
    <div class="main">
        <el-row>
            <el-col v-for="(info) in championInformations" :key="info.num" :span="3">
                <el-card :body-style="{ padding: '4px' }" class="card" shadow="always">
                    <img :src=info.img class="image" />
                    <div style="padding: 10px">
                        <div class="mod-num">{{ info.num }}</div>
                        <div class="mod-name">{{ info.name }}</div>
                        <div class="mod-title">{{ info.title }}</div>
                        <el-button text class="button" @click="sale(info)">Sale</el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>

    <el-dialog v-model="saleDialog" title="Sale this champion" width="30%">
        <h3>
            <span>{{ saleChampionInformation.name }}</span>
            <span style="padding:10px">{{ saleChampionInformation.title }}</span>
        </h3>

        <div>{{ saleChampionInformation.uri }}</div>

        <el-divider />

        <div>Selling Price / LuuToken</div>
        <div class="sellingPrice">
            <el-input-number size="large" v-model="num" :precision="4" :step="1" :min="0.0001" />
        </div>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="saleDialog = false">Cancel</el-button>
                <el-button type="primary" @click="confirmSale()">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { BigNumber, ethers } from 'ethers';
import { ref } from 'vue';
import { ChampionNFT } from '../../../../../contract/src/types/contracts/ChampionNFT';
import { ChampionNFT__factory } from '../../../../../contract/src/types/factories/contracts/ChampionNFT__factory';
import { useStore } from '../../../store';
import { ChampionInformation, getChampionInformation } from '../../../types/championInformation';
import { ChampionNFTAddress } from '../../../utils/conctract/SomeAddress';
import { numToDecimals18BN } from '../../../utils/math';

const saleDialog = ref(false)
const num = ref(1)
const saleChampionInformation = ref<ChampionInformation>({
    tokenId: BigNumber.from("0"),
    num: '',
    uri: '',
    name: '',
    title: '',
    img: ''
})

const store = useStore()
const championInformations = ref(new Array<ChampionInformation>())
getYourChampions()
async function getYourChampions() {
    if (store.provider && store.signer && store.account !== "") {
        const championNFTContract = new ethers.Contract(ChampionNFTAddress, ChampionNFT__factory.abi, store.signer) as ChampionNFT;
        const tokenIds: BigNumber[] = await championNFTContract.getOwnerTokenIds(store.account);
        for (const tokenId of tokenIds) {
            const championInformation = getChampionInformation(tokenId);
            championInformation.then(championInformation => {
                if (championInformation != null) {
                    championInformations.value.push(championInformation)
                }
            })
        }
        console.log('getYourChampions');
    } else {
        console.log('Please connect MetaMask!');
    }
}

function sale(championInformation: ChampionInformation) {
    saleChampionInformation.value = championInformation;
    saleDialog.value = true;
}

async function confirmSale() {
    if (store.provider && store.signer && store.account !== "") {
        const championNFTContract = new ethers.Contract(ChampionNFTAddress, ChampionNFT__factory.abi, store.signer) as ChampionNFT;
        await championNFTContract.sellChampionNFT(saleChampionInformation.value.tokenId, numToDecimals18BN(num.value));
        console.log('confirmSale');
    } else {
        console.log('Please connect MetaMask!');
    }
    saleDialog.value = false;
}

</script>

<style scoped>
.main {
    text-align: center;
}

.card {
    margin: 3px;
}

.image {
    width: 100%;
    display: block;
}

.mod-name {
    font-size: medium;
}

.mod-title {
    font-size: x-small;
}
</style>
