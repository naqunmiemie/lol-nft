<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>LuuToken</span>
                <span class="contractState">Runing</span>

                <div class="stateButton">
                    <el-button class="button" type="primary" text>Unpause</el-button>
                    <el-button class="button" type="danger" text>Pause</el-button>
                </div>

            </div>
        </template>
        <div class="item">
            <span>Eth:</span>
            <span class="ethBalance">{{ store.ownerEthBalanceStr }}</span>
            <el-button type="primary" text>withDraw</el-button>
        </div>
        <el-divider />
        <div class="item">
            <span>Usdt:</span>
            <span class="usdtBalance">{{ store.ownerUsdtBalanceStr }}</span>
            <el-button type="primary" text>withDraw</el-button>
        </div>
    </el-card>
</template>

<script setup lang='ts'>
import { ethers, utils } from 'ethers';
import { ERC20 } from '../../../../../contract/src/types/@openzeppelin/contracts/token/ERC20/ERC20';
import { useStore } from '../../../store/index';
import { LuuTokenAddress } from '../../../utils/conctract/luuTokenAddr';
import { UsdtAbi, UsdtAddress } from '../../../utils/conctract/usdtAddrAbi';
const store = useStore()
getOwnerBalance()
async function getOwnerBalance() {
    if (store.provider && store.signer) {
        //getBalanceOfEth
        store.ownerEthBalance = (await store.provider.getBalance(LuuTokenAddress)).toString();
        //getBalanceOfUsdt
        const usdtContract = new ethers.Contract(UsdtAddress, UsdtAbi, store.signer) as ERC20;
        store.ownerUsdtBalance = (await usdtContract.balanceOf(LuuTokenAddress)).toString()
    } else {
        console.log('Please connect MetaMask!');
    }
}

async function withDrawEth() {
    if (store.provider && store.signer) {

    } else {
        console.log('Please connect MetaMask!');
    }
}

async function withDrawUsdt() {
    if (store.provider && store.signer) {
        const usdtContract = new ethers.Contract(UsdtAddress, UsdtAbi, store.signer) as ERC20;
        await usdtContract.transfer(LuuTokenAddress,utils.bigNumberify(store.ownerUsdtBalance))
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
