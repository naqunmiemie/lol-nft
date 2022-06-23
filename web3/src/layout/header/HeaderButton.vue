<template>
    <div class="button">
        <el-icon class="icon" :size="30">
            <User /> 
        </el-icon>
        <el-icon class="icon" :size="30" @click="clickWallet()">
            <Wallet />
        </el-icon>
    </div>
</template>

<script setup lang='ts'>
import { useStore } from '../../store/index';

const store = useStore()

function clickWallet() {
    store.drawer = !store.drawer
}
</script>


<style lang='scss' scoped>
.button {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;

    .icon {
        margin: 6px;
        color: #b1b3b8;
        :hover {
            color:  #000000;
        }
    }

}
</style>