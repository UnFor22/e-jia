<template>
    <div id="index-container">
        <div class="header clearfix">
            <div class="header-left fll">
                <img src="../assets/logo.png" alt="" style="width:130px">
            </div>
            <router-link to='/' class="header-right flr">登录</router-link>
        </div>
        <div class="swiper">
            <mt-swipe :auto="4000" v-for="item in listImg" :key="item.id" class="swiper-wrap">
                <mt-swipe-item>
                    <router-link to='/'>
                        <img :src="item.url" alt="" style="width:7.2rem">
                    </router-link>
                    <div class="img-title">{{item.title}}</div>
                </mt-swipe-item>
            </mt-swipe>    
        </div>
        <div class="nav">
                <ul>
                    <li class="nav-wrap">
                        <div class="nav-item">
                            <router-link to="/">
                                <img src="../assets/icon_01.png" alt="">
                                <span>信工新闻眼</span>
                            </router-link>
                        </div>
                        <div class="nav-item">
                            <router-link to="/">
                                <img src="../assets/icon_02.png" alt="">
                                <span>掌上组织生活</span>
                            </router-link>
                        </div>
                        <div class="nav-item">
                            <router-link to="/">
                                <img src="../assets/icon_03.png" alt="">
                                <span>党员云互动</span>
                            </router-link>
                        </div>
                    </li>
                    <li class="nav-wrap">
                        <div class="nav-item">
                            <router-link to="/">
                                <img src="../assets/icon_04.png" alt="">
                                <span>党建一点通</span>
                            </router-link>
                        </div>
                        <div class="nav-item">
                            <router-link to="/">
                                <img src="../assets/icon_05.png" alt="">
                                <span>党员亮身份</span>
                            </router-link>
                        </div>
                        <div class="nav-item">
                            <router-link to="/">
                                <img src="../assets/icon_06.png" alt="">
                                <span>党史上的今天</span>
                            </router-link>
                        </div>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script> 
    // import Vue from 'vue';
    import {Swipe, SwipeItem} from 'mint-ui'
    import 'mint-ui/lib/style.css'

    // Vue.component(Swipe.name, Swipe);
    // Vue.component(SwipeItem.name, SwipeItem);
    
    export default {
        components: {
            'mt-swipe': Swipe,
            'mt-swipe-item': SwipeItem
        },
        data (){
            return {
                listImg: [
                    {
                        url: '../assets/banner.png',
                        id:0,
                        title:'讲形势指方向-一图解读习近平'
                    },
                    {
                        url: '../assets/banner.png',
                        id:1,
                        title: '校长探针在信息工程学院作学习中央31号文件报告'
                    },
                    {
                        url: '../assets/banner.png',
                        id:2,
                        title: '水調歌頭—慶祝黨的十九大勝利召開'
                    },
                    {
                        url: '../assets/banner.png',
                        id:3,
                        title:'讲形势指方向——图解读习近平这次对省部级干部说了啥'
                    }
                ]  
            }
        }
    }
    
</script>

<style scoped lang = 'scss'>
@import '../style/index.scss';
.swiper{
    position: relative;
    .swiper-wrap {
       width: 2.92rem;

       .img-title {
           font-size: 14px;
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
    text-align: center;
    
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
                margin: 0.3rem 0 0.18rem;
            }
            color: #333; 
        }
    }
}   
</style>