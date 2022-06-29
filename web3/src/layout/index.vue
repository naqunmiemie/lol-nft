<template>
    <el-container class="container">
        <el-header class="header">
            <Header></Header>
        </el-header>
        <el-main class="main">
            <Main></Main>
            <!-- <router-view></router-view> -->
        </el-main>
    </el-container>
</template>
<script setup lang='ts'>
import Header from './header/Header.vue';
import Main from './main/Main.vue';
</script>

<style lang="scss" scoped>
.container {
    height: 100%;

    .header {
        height: 50px;
        padding: 0;
        margin: 0;
        border: none;
        display: flex;
        align-items: center;
        background-color: white;
    }

    .main {
        background-color: darkgray;
    }
}
</style>