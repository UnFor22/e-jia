<template>
    <div>
        <heads></heads>
        <div class="integral-wrap">
            <div class="integral-img">
                <span>67.5</span>
            </div>
            <div class="integral">
                <router-link :to='this.token ? "/integraldetail" : "/login"'>
                    <img src="/static/imgs/lxjf.png" alt="" class="img-left fll">
                    <span class="fll">积分明细</span>
                    <img src="/static/imgs/right.png" alt="" class="img-right">
                </router-link>
            </div>
            <div class="integralrule clearfix">
                <span class="fll">积分规则</span>
                <img class="flr" src="../../assets/wenhao.png" alt="">
            </div>
            <div class="rule">
                <ul>
                    <li class="clearfix">
                        <span class="fll">登陆APP</span>
                        <span class="flr color">5</span>
                    </li>
                    <li class="clearfix">
                        <span class="fll">完善个人信息</span>
                        <span class="flr color">2</span>
                    </li>
                    <li class="clearfix">
                        <span class="fll">查看积分</span>
                        <span class="flr color">1</span>
                    </li>
                    <li class="clearfix">
                        <span class="fll">按时缴纳党费</span>
                        <span class="flr color">10</span>
                    </li>
                    <li class="clearfix">
                        <span class="fll">查看通知</span>
                        <span class="flr color">2</span>
                    </li>
                    <li class="clearfix">
                        <span class="fll">了解学院工作动态</span>
                        <span class="flr color">5</span>
                    </li>
                    <li class="clearfix">
                        <span class="fll">上交思想汇报经审核通过</span>
                        <span class="flr color">5</span>
                    </li>
                    <li class="clearfix">
                        <span class="fll">主动学习相关文件</span>
                        <span class="flr color">10</span>
                    </li>
                    <li class="clearfix">
                        <span class="fll">认真撰写心得总结并上交，经审核通过</span>
                        <span class="flr color">10</span>
                    </li>
                    <li class="clearfix">
                        <span class="fll">提交个人总结，并参与评议</span>
                        <span class="flr color">2</span>
                    </li>
                    <li class="clearfix">
                        <span class="fll">积极参与互动</span>
                        <span class="flr color">5</span>
                    </li>
                    <li class="clearfix">
                        <span class="fll">学习党建知识</span>
                        <span class="flr color">5</span>
                    </li>
                    <li class="clearfix">
                        <span class="fll">学习党史</span>
                        <span class="flr color">10</span>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                token :localStorage.getItem('token')
            }
        }
    }
</script>

<style scoped lang='scss'>
.integral-wrap {
    margin-top: 0.88rem;
    .integral-img {
        width: 7.2rem;
        height: 3rem;
        background: url('../../assets/jifen.png') no-repeat;
        background-size: contain;
        position: relative;
        span {
            font-size: 16px;
            color: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%)
        }
    }
       
    .integral {
        border: 1px solid #ddd;
        width: 7.2rem;
        box-sizing: border-box;
        height: 1.1rem;
        padding: 0.13rem 0.45rem;
        line-height: 1.1rem;
        border-bottom: 1px solid #ddd;
        border-left: transparent;
        border-right: transparent;
        a{
            .img-left {
                width: 0.63rem;
                margin-top: 0.105rem;
            }
            span{
                color: #666;
                font-size: 16px;
                padding-left: 0.3rem;
                display: block;
                height: 0.84rem;
                line-height: 0.84rem;
            }
            .img-right {
                // height: 0.63rem;
                float: right;
                height: 0.25rem;
                margin-top: 0.29rem;
            }
        } 
    }
    .integralrule {
        padding: 0.16rem 0.45rem;
        background: rgb(238,238,238);
        span {
            color: #444;
            font-size: 16px;
        }
    }
    .rule {
        ul {
            li {
                padding: 0.16rem 0.45rem;
                border-bottom: 1px solid #ddd;
                span {
                    font-size: 14px;
                    color: rgb(153, 153, 153);
                }
                .color {
                    color: red;
                }
            }
        }
    }
}
</style>