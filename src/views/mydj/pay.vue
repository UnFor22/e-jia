<template>
    <div>
        <heads></heads>
        <div class="pay-wrap">
            <div class="pay-title">
                请选择支付方式
            </div>
            <div class="dj-user-item clearfix" @click="handlealert">
                <div>
                    <i class="iconfont icon-weixinzhifu img-left fll"></i> 
                    <span class="fll">微信</span>
                    <img src="/static/imgs/right.png" alt="" class="img-right flr">  
                </div> 
            </div>
            <div class="dj-user-item clearfix" @click="handlealert">
                <i class="iconfont icon-zhifubao img-left fll"></i> 
                <span class="fll">支付宝</span>
                <img src="/static/imgs/right.png" alt="" class="img-right flr">  
            </div>
        </div>
    </div>
</template>

<script>
    import { MessageBox } from 'mint-ui'
    export default {
        data() {
            return {
                MessageBox:{
                    message: 'url("../../assets/alipay.png")',
                    // img: url("../../assets/alipay.png"),
                    showConfirmButton: false
                }
            }
        },
        methods: {
            handlealert(){
                MessageBox(this.MessageBox)
            }
        }
        
    }
</script>

<style scoped lang='scss'>
@import '../../assets/iconfont/iconfont.css';

.pay-wrap {
    .pay-title {
        font-size: 16px;
        margin: 1.28rem 0.2rem 0.1rem;
        font-weight: 400;

    }
    .dj-user-item {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        height: 1.2rem;
        line-height: 1.2rem;
        padding: 0.2rem;
        margin-top: -1px;
        span {
            font-size: 15px;
            color: #444;
        }
        .icon-weixinzhifu {
            color: #61c346;
            margin-right: 0.2rem;
        }
        .icon-zhifubao {
            color: #0096da;
            margin-right: 0.2rem;
        }
        .img-right {
            height: 0.4rem;
            margin: 0.4rem 0;
        }
    }
}
</style>