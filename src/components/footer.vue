<template>
    <div class="footer">
        <router-link to='/' :class="[$route.name === 'index' ? 'active' : 'no-active']">
            <i class="footer-i1"></i>
            <span>首页</span>
        </router-link>
        <router-link to='/notice' :class="[$route.name === 'notice' ? 'active' : 'no-active']">
            <i class="footer-i2"></i>
            <span>通知早知道</span>
        </router-link>
        <router-link to='/mydj' :class="[$route.name === 'mydj' ? 'active' : 'no-active']">
            <i class="footer-i3"></i>
            <span>我的党建</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.footer {
    height: 1.38rem;
    display: flex;
    justify-content: space-around;
    background: white;
    position: fixed;
    bottom:0;
    left: 0;
    right: 0;

    .no-active {
        flex: 1;
        text-align: center; 
        i { 
            display: block;
            width: 0.36rem;
            height: 0.36rem;
            margin: 0.24rem auto 0.1rem;
        }
        .footer-i1 {
            background: url('../assets/党_grey.png') no-repeat;
            background-size: contain;
        }
        .footer-i2 {
            background: url('../assets/消息_grey.png') no-repeat;
            background-size: contain;
        }
        .footer-i3 {
            background: url('../assets/会员_grey.png') no-repeat;
            background-size: contain;
        }
        span{
            display: block;
            font-size: 14px;
            color: #aaa;
        }  
    }
    .active {
        flex: 1;
        text-align: center; 
        i { 
            display: block;
            width: 0.36rem;
            height: 0.36rem;
            margin: 0.24rem auto 0.1rem;
            
        }
        .footer-i1 {
            background: url('../assets/党_red.png') no-repeat;
            background-size: contain;
        }
        .footer-i2 {
            background: url('../assets/消息_red.png') no-repeat;
            background-size: contain;
        }
        .footer-i3 {
            background: url('../assets/会员_red.png') no-repeat;
            background-size: contain;
        }
        span{
            display: block;
            font-size: 14px;
            color: #c7000a;
        } 
    }
}
</style>