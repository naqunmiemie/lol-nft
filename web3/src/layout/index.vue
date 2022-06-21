<template>
    <div class="layout">
        <el-container>
            <el-header class="header">
                <Header />
            </el-header>
            <el-main class="main">
                <Main />
            </el-main>
        </el-container>
    </div>
</template>
<script setup lang='ts'>
import Header from './header/Header.vue';
import Main from './main/Main.vue';
</script>

<style lang="scss" scoped>
.layout {
    height: 100%;

    .header {
        height: 50px;
        display: flex;
        align-items: center;
        background-color: darkgray;
    }

    .main {
        padding-top: 0;
        background-color: darkgray;
    }
}
</style>