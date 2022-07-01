<template>
    <div class="button">
        <el-icon class="icon" :size="30" @click="clickWallet()">
            <Wallet />
        </el-icon>
    </div>
</template>

<script setup lang='ts'>
import { useStore } from '../../store/index';


const store = useStore()

function clickWallet() {
    store.drawer = true
}
</script>


<style lang='scss' scoped>
.button {

    flex-direction: row-reverse;
    margin-right: 6px;
    margin-left: auto;

    .icon {
        margin: 6px;
        color: #b1b3b8;

        :hover {
            color: #000000;
        }
    }

}
</style>