<template>
    <div class="main">
        <el-row>
            <el-col v-for="(info) in championInformations" :key="info.num" :span="3">
                <el-card :body-style="{ padding: '4px' }" class="card" shadow="always">
                    <img :src=info.img class="image" />
                    <div style="padding: 10px">
                        <!-- <div class="mod-num">{{ info.num }}</div> -->
                        <div class="mod-name">{{ info.name }}</div>
                        <div class="mod-title">{{ info.title }}</div>
                        <el-button text class="button" @click="buy(info)">Buy</el-button>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>

    <el-dialog v-model="buyDialog" title="Buy this champion" width="30%">
        <h3>
            <span>{{ buyChampionInformation.name }}</span>
            <span style="padding:10px">{{ buyChampionInformation.title }}</span>
        </h3>

        <div>{{ buyChampionInformation.uri }}</div>

        <el-divider />

        <div>Selling Price / LuuToken</div>
        <div class="sellingPrice">
            {{ decimals18todecimals4(num.toString()) }}
        </div>

        <template #footer>
            <span class="dialog-footer">
                <el-button @click="buyDialog = false">Cancel</el-button>
                <el-button type="primary" @click="confirmBuy()">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script lang="ts" setup>
import { BigNumber, ethers, PayableOverrides } from 'ethers';
import { ref } from 'vue';
import { ChampionNFT } from '../../../../../contract/src/types/contracts/ChampionNFT';
import { LuuTokenV2 } from '../../../../../contract/src/types/contracts/LuuTokenV2';
import { ChampionNFT__factory } from '../../../../../contract/src/types/factories/contracts/ChampionNFT__factory';
import { LuuTokenV2__factory } from '../../../../../contract/src/types/factories/contracts/LuuTokenV2__factory';
import { useStore } from '../../../store';
import { ChampionInformation, getChampionInformation } from '../../../types/championInformation';
import { ChampionNFTAddress, LuuTokenAddress } from '../../../utils/conctract/SomeAddress';
import { decimals18todecimals4 } from '../../../utils/math';

const buyDialog = ref(false)
const num = ref<BigNumber>(BigNumber.from("0"))
const buyChampionInformation = ref<ChampionInformation>({
    tokenId: BigNumber.from("0"),
    num: '',
    uri: '',
    name: '',
    title: '',
    img: ''
})

const store = useStore()
const championInformations = ref(new Array<ChampionInformation>())
getTransactionCenter()
async function getTransactionCenter() {
    if (store.provider && store.signer && store.account !== "") {
        const championNFTContract = new ethers.Contract(ChampionNFTAddress, ChampionNFT__factory.abi, store.signer) as ChampionNFT;
        const tokenIds: BigNumber[] = await championNFTContract.getTransactionCenterIds();
        for (const tokenId of tokenIds) {
            const championInformation = getChampionInformation(tokenId);
            championInformation.then(championInformation => {
                if (championInformation != null) {
                    championInformations.value.push(championInformation)
                }
            })
        }
        console.log('getTransactionCenter');
    } else {
        console.log('Please connect MetaMask!');
    }
}

async function buy(championInformation: ChampionInformation) {
    buyChampionInformation.value = championInformation;
    buyDialog.value = true;
    if (store.provider && store.signer && store.account !== "") {
        const championNFTContract = new ethers.Contract(ChampionNFTAddress, ChampionNFT__factory.abi, store.signer) as ChampionNFT;
        num.value = await championNFTContract.getPrizeById(buyChampionInformation.value.tokenId);
    } else {
        console.log('Please connect MetaMask!');
    }
}

async function confirmBuy() {
    try {
        if (store.provider && store.signer && store.account !== "") {
            const luuTokenContract = new ethers.Contract(LuuTokenAddress, LuuTokenV2__factory.abi, store.signer) as LuuTokenV2;
            await luuTokenContract.buyChampionNFT(buyChampionInformation.value.tokenId);
            console.log("confirmBuy");
        } else {
            console.log('Please connect MetaMask!');
        }
    } catch (error) {
        console.log(error);
    }
    buyDialog.value = false;
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
