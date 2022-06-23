<template>
  <el-drawer class="drawer" v-model="store.drawer" title="My wallet" :direction="direction">
    <el-card shadow="MetaMask"> MetaMask </el-card>
  </el-drawer>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from '../../store/index';

const store = useStore()
const direction = ref('rtl')


</script>


<style lang='scss' scoped>

</style>
