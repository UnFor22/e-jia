<template>
<div class="content">
    <div v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="260" infinite-scroll-immediate-check=false class="new-1">
        <mt-spinner :class="!this.load1 ? 'loading-top' : 'no-loading'" id="top" type="fading-circle" color="#26a2ff" :size="60"></mt-spinner>
        <div class="news-wrap"  v-for="item in tableData" :key="item.newsId">
            <div class="news-item clearfix" @click="handleClick(item.newsId)">
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
            </div>  
        </div>     
    </div>
    <div class="dixian" v-if="this.loadimg < 10">
        <span>已经没有更多内容了</span>
    </div>
    <div class='loading' v-else>
        <mt-spinner :class="this.loading ? 'loading-deep' : 'no-loading'" id="top" type="fading-circle" :size="30"></mt-spinner>
    </div>
</div>
    
</template>

<script>
    export default {
        data() {
            return {
                tableData:[],
                newsId: '',
                sr: '',
                rqr: '',
                tr: '',
                loadimg: 10,
                page: 1,
                rows: 10,
                loading: false,
                load1: false,
            }
        },
        methods: {
            getData(){
                this.sr = this.$route.fullPath
                switch(this.sr)
                {
                case '/news':
                    this.rqr = '/news/newsList.do?type=0'
                    this.tr = '/newsdetail'
                break;
                case '/politystudy':
                    this.rqr = '/news/newsList.do?type=8'
                    this.tr = '/studydetail'
                break;
                case '/through':
                    this.rqr = '/news/newsList.do?type=3'
                    this.tr = '/throughdetail'
                break;
                case '/identity':
                    this.rqr = '/news/newsList.do?type=5'
                    this.tr = '/identitydetail'
                break;
                case '/wheneverstudy':
                    this.rqr = '/news/newsList.do?type=6'
                    this.tr = '/studydetail1'
                break;
                case '/systembuild':
                    this.rqr = '/news/newsList.do?type=4'
                    this.tr = '/builddetail'
                break;
                case '/featureavtive':
                    this.rqr = '/news/newsList.do?type=1'
                    this.tr = '/activedetail'
                break;
                case '/notice':
                    this.rqr = '/news/newsList.do?type=2'
                    this.tr = '/noticedetail'
                break;
                }
                this.$axios.get(`${this.rqr}`).then(res => {
                    // console.log(res)
                    this.tableData = res.rows
                    this.load1 = true
                    // this.newsId = res.rows.newsId

                })
            },
            handleClick(newsId){
                this.$router.push(`${this.tr}?id=${newsId}`)
            },
            loadMore() {
                this.loading = true;
                setTimeout(() => {
                    this.$axios.get(`${this.rqr}&page=${this.page+1}&rows=${this.rows}`).then(res => {
                        this.page+=1
                        this.loadimg = res.rows.length
                        console.log(res)
                        this.tableData = [...this.tableData,...res.rows]
                        // console.log(this.tableData)
                    })     
                    this.loading = false;
                }, 1500);
            }
        },
        created(){
            this.getData()
        },
        
    }
</script>

<style scoped lang='scss'>
.content{
    margin-top: 0.88rem;
    .new-1 {
        .loading-top {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        .no-loading{
            display: none;
        }
        .news-wrap {
            
            .news-item {
                display: block;
                padding: 0.2rem;
                border-bottom: 1px solid #ddd;
                box-sizing: border-box;
                height: 2.1rem;
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
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
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
    .loading {
        position: relative;
        height: 0.6rem;
        .loading-deep {
            position: absolute;
            bottom: 0;
            left: 3.45rem;
        }
        .no-loading {
            display: none;
        }
    }
    .dixian {
        font-size: 14px;
        color: #666;
        height: 0.6rem;
        line-height: 0.6rem;
        text-align: center;
    }
}
    
</style>