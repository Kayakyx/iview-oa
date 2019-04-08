<template>
    <div class="home">
        <span class="text">欢迎来到代理商管理系统</span>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    .home{
        display: table;
        width: 100%;
        height: calc(100vh - 64px);
        text-align: center;
    }
    .text{
        display: table-cell;
        vertical-align: middle;
        font-size: 50px;
    }
</style>