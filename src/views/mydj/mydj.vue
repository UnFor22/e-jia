<template>
    <div class="mydj">
        <div class="header">
            <div class="header-title">
                我的党建
            </div>
        </div>
        <div class="mydj-wrap">
            <div class="dj-userinfo">
                <router-link to='/login' v-if="!formData.header" class="userwrap">
                    <div class="userimg">
                         <img src="/static/imgs/yuan.png" alt="" class="userimg" >
                    </div>
                    <div class="user-title">你还没有登录，请登录</div>
                </router-link>
                <div v-else class="userwrap">
                    <div class="userimg">
                        <img :src="formData.header" alt="" class="userimg">
                    </div>
                    <div class="user-title">{{formData.jobRank}}</div>
                </div>
            </div>

            <div class="dj-user">
                <div class="dj-user-item clearfix">
                    <router-link to='/userinfo'>
                        <img src="/static/imgs/person.png" alt="" class="img-left fll">
                        <span class="fll">个人信息</span>
                        <img src="/static/imgs/right.png" alt="" class="img-right">
                    </router-link>
                </div>
                <div class="dj-user-item clearfix">
                    <router-link to='/integral'>
                        <img src="/static/imgs/icon_01.png" alt="" class="img-left fll">
                        <span class="fll">个人量化积分</span>
                        <img src="/static/imgs/right.png" alt="" class="img-right">
                    </router-link>
                </div>
                <div class="dj-user-item clearfix">
                    <router-link to='/'>
                        <img src="/static/imgs/xgmm.png" alt="" class="img-left fll">
                        <span class="fll">修改密码</span>
                        <img src="/static/imgs/right.png" alt="" class="img-right">  
                    </router-link> 
                </div>
                <div class="dj-user-item clearfix">
                    <router-link to='/'>
                        <img src="/static/imgs/icon3.png" alt="" class="img-left fll">
                        <span class="fll">党费缴纳</span>
                        <img src="/static/imgs/right.png" alt="" class="img-right">  
                    </router-link> 
                </div>
            </div>
            <div class="logout" v-if="formData.header">
                <input type="button" value="退出登录" class="logout-button" @click="handleLogout">
            </div>
            <div v-else></div>
        </div>
     
        <tabs></tabs>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                formData:{},
                userinfo:{}
            }
        },
        methods:{
            getData(){
                this.formData = this.$store.state.userinfo
            },
            handleLogout(){
                this.$store.commit('IS_LOGIN',this.userinfo)
                this.$store.state.token=''
                this.$router.push('/login')
            }
        },
        created(){
            this.getData()
        }
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
            width: 100%;;
            .userimg {
                width: 1.26rem;
                height: 1.26rem;
                border-radius: 50%;
                margin: 0 auto 0.2rem;

                img {
                    width: 1.26rem;
                    // display: block;
                }
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
                    // height: 0.63rem;
                    float: right;
                    height: 0.25rem;
                    margin-top: 0.19rem;
                }
            } 
        }
    }
    .logout {
        padding: 0.12rem;
        .logout-button {
            width: 100%;
            background: #ef473a;
            color: #fff;
            font-size: 16px;
            border-radius: 4px;
            border: transparent;
            margin-top: 0.1rem;
            height: 0.9rem;
        }
    }
}
    
</style>