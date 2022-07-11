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
      <el-button type="primary" @click="luckyDraw()">Lucky Draw</el-button>
    </el-affix>
  </div>
</template>

<script lang="ts" setup>
import { BigNumber, ethers } from 'ethers';
import { ref } from 'vue';
import { ChampionNFT } from '../../../../../contract/src/types/contracts/ChampionNFT';
import { LuuToken } from '../../../../../contract/src/types/contracts/LuuToken';
import { ChampionNFT__factory } from '../../../../../contract/src/types/factories/contracts/ChampionNFT__factory';
import { LuuToken__factory } from '../../../../../contract/src/types/factories/contracts/LuuToken__factory';
import { useStore } from '../../../store';
import { ChampionInformation, getChampionInformation } from '../../../types/championInformation';
import { ChampionNFTAddress, LuuTokenAddress } from '../../../utils/conctract/SomeAddress';
import { getDeadline } from '../../../utils/contractHelper/permitHelper';
import { premitTypedDate } from '../../../utils/contractHelper/typedData';


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

async function luckyDraw() {
  if (store.provider && store.signer && store.account) {
    const championNFTContract = new ethers.Contract(ChampionNFTAddress, ChampionNFT__factory.abi, store.signer) as ChampionNFT;
    const luuTokenContract = new ethers.Contract(LuuTokenAddress, LuuToken__factory.abi, store.signer) as LuuToken;
    await luuTokenContract.nonces(store.account);
    
    let deadline = getDeadline();
    let amount = 10 ** 18;
    let msgParams = premitTypedDate("LuuToken",
      LuuTokenAddress,
      store.account, bankAddr.address, amount, deadline, this.chainId, this.nonce);

    store.provider.({
      method: 'eth_signTypedData_v4',
      params: [store.account, permitTypehash],
      from: store.account
    }, (err, sign) => {
      this.sign = sign.result;
      console.log(this.sign)
      //  椭圆曲线签名签名的值:
      // r = 签名的前 32 字节
      // s = 签名的第2个32 字节
      // v = 签名的最后一个字节
      let r = '0x' + this.sign.substring(2).substring(0, 64);
      let s = '0x' + this.sign.substring(2).substring(64, 128);
      let v = '0x' + this.sign.substring(2).substring(128, 130);
      this.bank.permitDeposit(this.account, amount, this.deadline, v, r, s, {
        from: this.account
      }).then(() => {
        this.getInfo();
        this.getNonce();
      })
    });
    console.log('luckyDraw');
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
