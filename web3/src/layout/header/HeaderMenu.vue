import router from '../../route/index';
<template>
    <el-menu class="headerMenu" default-active="lucky-draw" mode="horizontal" router>
        <el-menu-item index="lucky-draw">Lucky Draw</el-menu-item>
        <el-menu-item index="transaction-center">Transaction Center</el-menu-item>
        <el-menu-item index="your-champions">Your Champions</el-menu-item>
        <el-menu-item index="contract-owner">Contract Owner</el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>

</script>

<style lang='scss' scoped>
.headerMenu {
    margin-left: 15px;
    width: 100%;
    height: 100%;
}
</style>
