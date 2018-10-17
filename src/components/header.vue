<template>
    <div class="header">   
        <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
        <span>{{this.$route.meta.title}}</span>
    </div>
</template>
<script>
    export default {
    
    }
</script>
<style lang='scss'>
    .header {
        height: 0.88rem;
        background: #c50206;
        line-height: 0.88rem;
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 998;
        .iconfont {
            float: left;
            color: #fff;
            margin-left: 0.2rem;  
        }
        span {
            color: #fff;
            font-size: 18px;
            font-weight: 400;
            display: block;
            height: 0.88rem;
            line-height: 0.88rem;
        }
    }
</style>