<template>
    <RightDrawer></RightDrawer>
    <router-view></router-view>
    <div>


        <h1>title</h1>
    </div>
</template>
<script setup lang='ts'>
import RightDrawer from '../rightDrawer/RightDrawer.vue';
</script>

<style>
div {
    display: flex;
}

h1 {
    display: flex;
    width: 100px;
    background-color: yellow;
}
</style>

