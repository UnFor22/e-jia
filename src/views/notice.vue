<template>
    <div class="notice">
        <div class="header">
            <div class="header-title">
                通知早知道
            </div>
        </div>
        <div class="notice-wrap">
            <div class="notice-item clearfix">
                <div class="notice-item-left fll">
                    <img src="/static/imgs/iconfont_gonggaotongzhi.png" alt="">
                </div>
                <div class="notice-item-right flr">
                    <div class="notice-title">
                        关于我院党总支近期将举办党的十九大知识竞赛的通知
                    </div>
                    <div class="notice-time">2017-10-30 14:53:56</div>
                </div>
            </div>
            <div class="notice-item clearfix">
                <div class="notice-item-left fll">
                    <img src="/static/imgs/iconfont_gonggaotongzhi.png" alt="">
                </div>
                <div class="notice-item-right flr">
                    <div class="notice-title">
                        信息工程学院组织教工党员赴何家冲开展“最佳党日活动”
                    </div>
                    <div class="notice-time">2017-10-30 14:53:56</div>
                </div>
            </div>
        </div>
            
        <tabs></tabs>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.notice {
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
        .header-title {
            color: white;
            font-size: 18px;
        }
    }
    .notice-wrap {
        margin-top: 0.88rem;
        .notice-item {
            padding: 0.3rem;
            // height: 2.44rem;
            border-bottom: 1px solid rgba(0, 0, 0, .1);
            .notice-item-left {
                padding-top: 0.2rem;
                img {
                    width: 0.6rem;
                    display: block;
                }
            }
            
            .notice-item-right {
                width: 5.6rem;
                margin-left: 0.4rem;
                .notice-title{
                    font-size: 15px;
                    color: #333;
                }
                .notice-time {
                    margin-top: 0.1rem;
                    font-size: 12px;
                    color: #666;
                }
            }
            
        }
    }
    

}
</style>