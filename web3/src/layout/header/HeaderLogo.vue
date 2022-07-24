<template>
  <div class="logo">
    <img src="@/assets/logo.png" alt="logo" />
    <span class="title">LuuToken</span>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  margin-left: 15px;
  color: #fff;
  height: 100%;

  img {
    height: 90%;
    margin-right: 12px;
  }

  span {
    font-weight: 600;
    line-height: 50px;
    font-size: 18px;
    color: #000;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    vertical-align: middle;
  }
}
</style>