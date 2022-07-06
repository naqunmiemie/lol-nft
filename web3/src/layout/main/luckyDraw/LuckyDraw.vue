<template>
  <el-row>
    <el-col v-for="(o) in 2" :key="o" :span="3">
      <el-card :body-style="{ padding: '4px' }" class="card" shadow="always">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image" />
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
import { ethers, BigNumber } from 'ethers';
import { ref } from 'vue'
import { ChampionNFT } from '../../../../../contract/src/types/contracts/ChampionNFT';
import { ChampionNFT__factory } from '../../../../../contract/src/types/factories/contracts/ChampionNFT__factory';
import { useStore } from '../../../store';
import { ChampionNFTAddress } from '../../../utils/conctract/SomeAddress';

const store = useStore()
const currentDate = ref(new Date())
prizePool()
async function prizePool() {
  if (store.provider && store.signer) {
    const championNFTContract = new ethers.Contract(ChampionNFTAddress, ChampionNFT__factory.abi, store.signer) as ChampionNFT;
    const tokenIds: BigNumber[] = await championNFTContract.getOwnerTokenIds(ChampionNFTAddress);
    for (const tokenId of tokenIds) {
      
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
