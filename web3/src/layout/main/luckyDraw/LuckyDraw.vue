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

    <el-affix target=".main" position="bottom" :offset="80">
      <el-button type="primary">Offset bottom 20px</el-button>
    </el-affix>
  </div>
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
