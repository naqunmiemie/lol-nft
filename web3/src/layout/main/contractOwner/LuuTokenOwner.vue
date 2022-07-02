<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <span>LuuToken</span>
                <span class="contractState">{{ store.luuTokenContractStateStr }}</span>

                <div class="stateButton">
                    <el-button class="button" type="primary" text @click="UnpauseLuuToken()">Unpause</el-button>
                    <el-button class="button" type="danger" text @click="PauseLuuToken()">Pause</el-button>
                </div>

            </div>
        </template>
        <div class="item">
            <span>Eth:</span>
            <span class="ethBalance">{{ store.ownerEthBalanceStr }}</span>
            <el-button type="primary" text @click="withDrawEth()">withDraw</el-button>
        </div>
        <el-divider />
        <div class="item">
            <span>Usdt:</span>
            <span class="usdtBalance">{{ store.ownerUsdtBalanceStr }}</span>
            <el-button type="primary" text @click="withDrawUsdt()">withDraw</el-button>
        </div>
    </el-card>
</template>

<script setup lang='ts'>
import { ethers } from 'ethers';
import { IERC20 } from '../../../../../contract/src/types/@openzeppelin/contracts/token/ERC20/IERC20';
import { LuuToken } from '../../../../../contract/src/types/contracts/LuuToken';
import { LuuToken__factory } from '../../../../../contract/src/types/factories/contracts/LuuToken__factory';
import { useStore } from '../../../store/index';
import { LuuTokenAddress } from '../../../utils/conctract/SomeAddress';
import { UsdtAbi, UsdtAddress } from '../../../utils/conctract/usdtAddrAbi';
const store = useStore()
getOwnerBalance()
getLuuTokenContractState()

async function UnpauseLuuToken() {
    if (store.provider && store.signer) {
        const luuTokenContract = new ethers.Contract(LuuTokenAddress, LuuToken__factory.abi, store.signer) as LuuToken;
        if (await luuTokenContract.paused()) {
            await luuTokenContract.unpause()
            getLuuTokenContractState()
        } else {
            console.log("luuTokenContract is running");
        }
    } else {
        console.log('Please connect MetaMask!');
    }
}

async function PauseLuuToken() {
    if (store.provider && store.signer) {
        const luuTokenContract = new ethers.Contract(LuuTokenAddress, LuuToken__factory.abi, store.signer) as LuuToken;
        if (await luuTokenContract.paused()) {
            console.log("luuTokenContract has been paused");
        } else {
            await luuTokenContract.pause()
            getLuuTokenContractState()
        }
    } else {
        console.log('Please connect MetaMask!');
    }
}

async function getOwnerBalance() {
    if (store.provider && store.signer) {
        //getBalanceOfEth
        store.ownerEthBalance = (await store.provider.getBalance(LuuTokenAddress)).toString();
        //getBalanceOfUsdt
        const usdtContract = new ethers.Contract(UsdtAddress, UsdtAbi, store.signer) as IERC20;
        store.ownerUsdtBalance = (await usdtContract.balanceOf(LuuTokenAddress)).toString()
    } else {
        console.log('Please connect MetaMask!');
    }
}

async function getLuuTokenContractState() {
    if (store.provider && store.signer) {
        const luuTokenContract = new ethers.Contract(LuuTokenAddress, LuuToken__factory.abi, store.signer) as LuuToken;
        store.luuTokenContractState = await luuTokenContract.paused()
        console.log('getLuuTokenContractState');
    } else {
        console.log('Please connect MetaMask!');
    }
}

async function withDrawEth() {
    if (store.provider && store.signer) {
        const luuTokenContract = new ethers.Contract(LuuTokenAddress, LuuToken__factory.abi, store.signer) as LuuToken;
        await luuTokenContract.withdrawEth()
    } else {
        console.log('Please connect MetaMask!');
    }
}

async function withDrawUsdt() {
    if (store.provider && store.signer) {
        const luuTokenContract = new ethers.Contract(LuuTokenAddress, LuuToken__factory.abi, store.signer) as LuuToken;
        await luuTokenContract.withdrawUsdt()
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
