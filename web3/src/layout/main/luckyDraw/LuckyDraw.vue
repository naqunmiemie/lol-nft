<template>
  <el-row>
    <el-col v-for="(info) in championInformations" :key="info.num" :span="3">
      <el-card :body-style="{ padding: '4px' }" class="card" shadow="always">
        <img :src=info.img class="image" />
        <div style="padding: 10px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button text class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { BigNumber, ethers } from 'ethers';
import { ref } from 'vue';
import { ChampionNFT } from '../../../../../contract/src/types/contracts/ChampionNFT';
import { ChampionNFT__factory } from '../../../../../contract/src/types/factories/contracts/ChampionNFT__factory';
import { useStore } from '../../../store';
import { ChampionNFTAddress } from '../../../utils/conctract/SomeAddress';
import { getChampionInformation, ChampionInformation } from '../championInformation';

const store = useStore()
const currentDate = ref(new Date())
const championInformations = ref(new Array<ChampionInformation>())
prizePool()
async function prizePool() {
  if (store.provider && store.signer) {
    const championNFTContract = new ethers.Contract(ChampionNFTAddress, ChampionNFT__factory.abi, store.signer) as ChampionNFT;
    const tokenIds: BigNumber[] = await championNFTContract.getOwnerTokenIds(ChampionNFTAddress);
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
    console.log('prizePool');
  } else {
    console.log('Please connect MetaMask!');
  }
}

</script>

<style scoped>
.time {
  font-size: 12px;
  color: #999;
}

.card {
  margin: 3px;
}

.bottom {
  margin-top: 10px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
