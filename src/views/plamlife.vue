<template>
    <div class="plamlife">
        <heads></heads>
        <img class="plam-img" src="/static/imgs/banner1.png" alt="">
        <div class="plam-wrap clearfix">
            <router-link to='/politystudy'>
                <div class="plam-item">
                    <img src="/static/imgs/icon1.png" alt="">
                    <span>政治学习</span>
                </div>
            </router-link>
            <router-link to='/'>
                <div class="plam-item">
                    <img src="/static/imgs/icon2.png" alt="">
                    <span>思想汇报</span>
                </div>
            </router-link>
            <router-link to='/'>
                <div class="plam-item plam-item3">
                    <img src="/static/imgs/icon3.png" alt="">
                    <span>心得总结</span>
                </div>
            </router-link>
            <router-link to='/'>
                <div class="plam-item">
                    <img src="/static/imgs/icon4.png" alt="">
                    <span>民主评议</span>
                </div>
            </router-link><router-link to='/'>
                <div class="plam-item">
                    <img src="/static/imgs/icon5.png" alt="">
                    <span>流动党员找组织</span>
                </div>
            </router-link>
            
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.plamlife{
    margin-top: 0.88rem;
    .plam-img {
        width: 7.2rem;
        display: block;
    }
    .plam-wrap {
        box-sizing: border-box;
        padding: 0.2rem;
        .plam-item {
            width: 1.9rem;
            height: 2.2rem;
            float: left;
            text-align: center;
            margin-right: 0.49rem;
            margin-top: 0.2rem;
            img {
                width: 1.42rem;
                // display: block;
            }
            span {
                font-size: 14px;
                color: #666;
                display: block;
            }
        }
        .plam-item3 {
            margin-right: 0;
        }
    }
}
</style>