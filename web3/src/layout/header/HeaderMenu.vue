import router from '../../route/index';
<template>
    <span class="headerMenu">
        <el-menu default-active="lucky-draw" mode="horizontal" router>
            <el-menu-item index="lucky-draw">Lucky Draw</el-menu-item>
            <el-menu-item index="transaction-center">Transaction Center</el-menu-item>
            <el-menu-item index="your-champions">Your Champions</el-menu-item>
            <el-menu-item index="admin">admin</el-menu-item>
        </el-menu>
    </span>
</template>

<script lang="ts" setup>

</script>

<style lang='scss' scoped>
.headerMenu {
    margin-left: 15px;
    height: 100%;
    background-color: yellow;
    width: 500px;
}
</style>
