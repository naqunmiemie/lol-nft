<template>
    <div class="main">
        <el-row>
            <el-col v-for="(info) in championInformations" :key="info.num" :span="3">
                <el-card :body-style="{ padding: '4px' }" class="card" shadow="always">
                    <img :src=info.img class="image" />
                    <div style="padding: 10px">
                        <div class="mod-name">{{ info.name }}</div>
                        <div class="mod-title">{{ info.title }}</div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { BigNumber, ethers } from 'ethers';
import { ref } from 'vue';
import { ChampionNFT } from '../../../../../contract/src/types/contracts/ChampionNFT';
import { ChampionNFT__factory } from '../../../../../contract/src/types/factories/contracts/ChampionNFT__factory';
import { useStore } from '../../../store';
import { ChampionInformation, getChampionInformation } from '../../../types/championInformation';
import { ChampionNFTAddress } from '../../../utils/conctract/SomeAddress';

const store = useStore()
const championInformations = ref(new Array<ChampionInformation>())
getYourChampions()
async function getYourChampions() {
    if (store.provider && store.signer && store.account) {
        const championNFTContract = new ethers.Contract(ChampionNFTAddress, ChampionNFT__factory.abi, store.signer) as ChampionNFT;
        const tokenIds: BigNumber[] = await championNFTContract.getOwnerTokenIds(store.account);
        for (const tokenId of tokenIds) {
            console.log(tokenId.toString());
            const championInformation = getChampionInformation(tokenId);
            championInformation.then(championInformation => {
                console.log(championInformation?.uri);
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
