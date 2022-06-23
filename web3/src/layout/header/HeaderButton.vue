<template>
    <div class="button">


        <el-icon class="icon" :size="30">
            <User />
        </el-icon>
        <el-icon class="icon" :size="30">
            <Wallet />
        </el-icon>

    </div>

</template>
<script setup lang='ts'>

</script>


<style lang='scss' scoped>
.button {
    margin-left: auto;
    display: flex;
    justify-content: flex-end;
    .icon{
        margin: 6px;
    }

}
</style>