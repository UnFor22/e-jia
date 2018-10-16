<template>
    <div class="mydj">
        <div class="header">
            <div class="header-title">
                我的党建
            </div>
        </div>
        <div class="mydj-wrap">
            <div class="dj-userinfo">
                <router-link to='/'>
                    <img src="/static/imgs/yuan.png" alt="" class="userimg">
                    <div class="user-title">你还没有登录，请登录</div>
                </router-link>
            </div>
            <div class="dj-user">
                <div class="dj-user-item clearfix">
                    <router-link to='/'>
                        <img src="/static/imgs/person.png" alt="" class="img-left fll">
                        <span class="fll">个人信息</span>
                        <div class="flr img-right">
                            <img src="/static/imgs/right.png" alt="" class="">
                        </div>
                    </router-link>
                </div>
                <div class="dj-user-item clearfix">
                    <router-link to='/'>
                        <img src="/static/imgs/icon_01.png" alt="" class="img-left fll">
                        <span class="fll">个人量化积分</span>
                        <div class="flr img-right">
                            <img src="/static/imgs/right.png" alt="" class="">
                        </div>
                    </router-link>
                </div>
                <div class="dj-user-item clearfix">
                    <router-link to='/'>
                        <img src="/static/imgs/xgmm.png" alt="" class="img-left fll">
                        <span class="fll">修改密码</span>
                        <div class="flr img-right">
                            <img src="/static/imgs/right.png" alt="" class="">
                        </div>
                        
                    </router-link> 
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
.mydj {
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
    .mydj-wrap{
        margin-top: 0.88rem;
        .dj-userinfo {
            padding: 0.48rem 0 0.20rem;
            text-align: center;
            background: #c50206;
            img {
                width: 1.26rem;
            }
            .user-title {
                font-size: 12px;
                color: #fff;
            }
        }
    }
    .dj-user {
        .dj-user-item {
            width: 7.2rem;
            box-sizing: border-box;
            height: 0.9rem;
            padding: 0.13rem 0.45rem;
            line-height: 0.9rem;
            border-bottom: 1px solid #ddd;
            a{
                .img-left {
                    width: 0.63rem;
                    display: block;
                    // margin: auto 0;
                }
                span{
                    color: #666;
                    font-size: 16px;
                    padding-left: 0.3rem;
                    display: block;
                    height: 0.64rem;
                    line-height: 0.64rem;
                }
                .img-right {
                    height: 0.63rem;
                    line-height: 0.63rem;
                    img {
                        width: 0.16rem;
                    }
                }
            } 
        }
    }
}
    
</style>