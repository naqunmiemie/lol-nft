<template>
    <HeaderLogo></HeaderLogo>
    <HeaderMenu class="HeaderMenu"></HeaderMenu>
    <HeaderButton></HeaderButton>

    
</template>
<script setup lang='ts'>
import HeaderLogo from './HeaderLogo.vue';
import HeaderButton from './HeaderButton.vue';
import HeaderMenu from './HeaderMenu.vue';
</script>

<style lang='scss' scoped>
.HeaderMenu{
    height: 100%;
    margin-left: 20px;
}
</style>