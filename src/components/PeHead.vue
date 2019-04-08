<template>
    <div class="pe-head">
        <span class="logo">LOGO</span>
        <span class="user">欢迎！Admin</span>
    </div>
</template>

<script>
    export default {
        name: "PeHead"
    }
</script>

<style scoped>
    .pe-head{
        height: 64px;
        background-color: #515a6e;
        display: flex;
        justify-content: space-between;
    }
    .logo{
        font-size: 18px;
        color: yellow;
        line-height: 64px;
        margin-left: 50px;
    }
    .user{
        font-size: 16px;
        color: #fff;
        line-height: 64px;
        margin-right: 100px;
    }
</style>