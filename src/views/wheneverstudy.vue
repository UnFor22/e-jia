<template>
    <div class="news">
        <heads></heads>
        <div class="news-1">
            <div class="news-wrap" v-for="item in tableData" :key="item.newsId">
                <router-link to="/" class="news-item clearfix">
                    <div class="news-item-left fll">
                        <img :src="item.pic" alt="">
                    </div>
                    <div class="news-item-right">
                        <div class="item-title">
                            {{item.title}}
                        </div>
                        <div class="item-time clearfix">
                            <div class="item-time-left fll">
                                {{item.currentTime}}
                            </div>
                            <div class="item-time-right flr">
                                <img src="/static/imgs/12-eye.png" alt="">
                                {{item.count}}
                            </div>
                        </div>
                    </div>
                </router-link>
                
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData:[]
            }
        },
        methods: {
            getData(){
                this.$axios.get('/news/newsList.do?type=6').then(res => {
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

<style scoped lang='scss'>
    .news { 
        .news-1 {
            margin-top: 0.88rem;
            .news-wrap {
                .news-item {
                    display: block;
                    padding: 0.2rem;
                    border-bottom: 1px solid #ddd;
                    box-sizing: border-box;
                    height: 2.0rem;
                    .news-item-left {
                        img{
                            width: 1.6rem;
                        }
                    }
                    .news-item-right {
                        margin-left: 1.8rem;
                        height: 1.6rem;
                        position: relative;
                        .item-title{
                            font-size: 16px;
                            line-height: 1.5;
                            color: #000;
                            font-weight: 500;
                        }
                        .item-time{
                            font-size: 10px;
                            color: #666;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            right: 0;
                        }
                    }
                }
            }
        }
        
    }
</style>