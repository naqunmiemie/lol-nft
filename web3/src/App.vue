<script setup lang="ts">


</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    <router-link to="/user">User Page</router-link>
    <span> &emsp;/&emsp;</span>
    <router-link to="/owner">Owner Page</router-link>

  </div>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
