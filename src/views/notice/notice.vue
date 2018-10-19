<template>
    <div class="notice">
        <div class="header">
            <div class="header-title">
                我的党建
            </div>
        </div>
        <contents></contents>   
        <tabs></tabs>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.header {
        z-index: 998;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 0.88rem;
        background: #c50206;
        line-height: 0.88rem;
        text-align: center;
        border-bottom: 1px solid #ce282b;
        .header-title {
            color: white;
            font-size: 18px;
        }
    }
</style>