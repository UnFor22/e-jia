<template>
    <div id="index-container">
        <div class="header clearfix">
            <div class="header-left fll">
                <img class="header-img" src="../assets/logo.png" alt="" style="width:130px">
            </div>
            <router-link to='/login' class="header-right flr">登录</router-link>
        </div>
        <div class="swiper">
            <mt-swipe :auto="4000"  class="swiper-wrap">
                <mt-swipe-item v-for="item in tableData" :key="item.id">
                    <router-link to='/login'>
                        <img :src="item.imgUrl" alt="121" style="width:7.2rem" class="swipe-img">
                        <div class="img-title">{{item.title}}</div>
                    </router-link> 
                </mt-swipe-item>
            </mt-swipe>    
        </div>
        <div class="nav">
                <ul>
                    <li class="nav-wrap">
                        <div class="nav-item">
                            <router-link to="/news">
                                <img src="../assets/icon_01.png" alt="">
                                <span>信工新闻眼</span>
                            </router-link>
                        </div>
                        <div class="nav-item">
                            <router-link to="/plamlife">
                                <img src="../assets/icon_02.png" alt="">
                                <span>掌上组织生活</span>
                            </router-link>
                        </div>
                        <div class="nav-item">
                            <router-link to="/cloudinter">
                                <img src="../assets/icon_03.png" alt="">
                                <span>党员云互动</span>
                            </router-link>
                        </div>
                    </li>
                    <li class="nav-wrap">
                        <div class="nav-item">
                            <router-link to="/through" class="nav-item">
                                <img src="../assets/icon_04.png" alt="">
                                <span>党建一点通</span>
                            </router-link>
                        </div>
                        <div class="nav-item">
                            <router-link to="/identity">
                                <img src="../assets/icon_05.png" alt="">
                                <span>党员亮身份</span>
                            </router-link>
                        </div>
                        <div class="nav-item">
                            <router-link to="/dstoday">
                                <img src="../assets/icon_06.png" alt="">
                                <span>党史上的今天</span>
                            </router-link>
                        </div>
                    </li>
                </ul>
        </div>
        <div class="middle-logo">
            <img src="../assets/banner01.png" alt="">
        </div>
        <div class="footer-nav">
            <div class="footer-nav-wrap">
                <div class="f-n-l"></div>
                <div class="f-n-r">
                    <ul>
                        <li>
                            <router-link to="/wheneverstudy"></router-link>
                            <router-link to="/whenevershot"></router-link>
                        </li>
                        <li>
                            <router-link to="/systembuild"></router-link>
                            <router-link to="/featureavtive"></router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <tabs></tabs>
    </div>
</template>

<script> 
    // import Vue from 'vue';
    import {Swipe, SwipeItem} from 'mint-ui'
    import 'mint-ui/lib/style.css'

    // Vue.component('mt-swipe', Swipe);
    // Vue.component('mt-swipe-item', SwipeItem);
    
    export default {
        components: {
            'mt-swipe': Swipe,
            'mt-swipe-item': SwipeItem
        },
        data (){
            return {
                tableData: [],
            }
        },
        methods: {
             getData(){
                this.$axios.get('/carousel/carouselList.do?type=0').then(res => {
                    console.log(res)
                    this.tableData = res.rows
                })
            } 
        },
        created(){
            this.getData()
        }
    }
    
</script>

<style scoped lang = 'scss'>

.header {
    z-index: 998;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 7.2rem;
    height: 1.13rem;
    background: #c50206;
    line-height: 1.13rem;
    padding: 0 0.48rem;
    box-sizing: border-box;
    .header-left {
        padding: 0.2rem;
        img {
            display: block;
        }
    }
    
    .header-right{
        font-size: 17px;
        font-weight: 300;
        color: #fff;
    }
}
.swiper{
    position: relative;
    margin-top: 1.13rem;
    .swiper-wrap {
        height: 3.8rem;
        .swipe-img{
            height: 3.8rem;
            display: block;
        }
       .img-title {
           padding: 0.1rem;
           font-size: 12px;
           font-weight: 300;
           color: #fff;
           position: absolute;
           bottom: 0;
           left: 0;
           right: 0;
           background: rgba(0,0,0,0.6);
       }
    }
}
.nav {
    height: 3.79rem;
    background: url('../assets/bt_bg.png') no-repeat;
    background-size: 100%;
    
    .nav-wrap {
        display: flex;
        justify-content: space-around;
    }
    .nav-item {
        width: 1.7rem;
        font-size: 14px;
        text-align: center;
        a {
            img {
                width: 0.9rem;
                margin: 0.3rem 0 0.14rem;
            }
            span {
                display: block;
            }
            color: #333; 
        }
    }
}   
.middle-logo {
    img {
        height: 1.73rem;
        width: 100%;
        vertical-align: middle;
    } 
}
.footer-nav {
    height: 3.16rem;
    background: url('../assets/tese.png') no-repeat;
    background-size: 100%;
    margin-bottom: 1.38rem;
    .footer-nav-wrap {
        display: flex;
        .f-n-l {
            flex: 1;
            height: 3.16rem;
            /* background: #f00; */
        }
        .f-n-r {
            flex: 2;
            height: 3.16rem;
            /* background: #0f0; */
            ul {
                height: 100%;
                li {
                    height: 50%;
                    display: flex;
                    a {
                        flex: 1;
                        width: 50%;
                        height: 100%;
                        /* border: 1px solid #000; */
                    }
                }
            }
            
            
        }
    }
    
}
</style>