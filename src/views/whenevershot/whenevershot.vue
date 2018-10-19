<template>
    <div class="whenevershot">
        <heads></heads>
        <div class="whenevershot-wrap1">
            <div class="whenevershot-wrap cleafix" v-for='item in formData' :key="item.newsId">
                <div @click="handleClick(item.newsId)">
                    <div class="ws-item">
                        <img :src="item.pic" alt="">
                        <div class="ws-title">
                            {{item.title}}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                formData: []
            }
        },
        methods:{
            getData(){
                this.$axios.get('news/newsList.do?type=7').then(res=>{
                    console.log(res)
                    this.formData = res.rows
                })
            },
            handleClick(newsId){
                this.$router.push(`/shotdetail?id=${newsId}`)
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped lang='scss'>
.whenevershot {
    .whenevershot-wrap1 {
        margin-top: 0.88rem;
        // padding: 0.3rem;
        box-sizing: border-box;
        .whenevershot-wrap {
            .ws-item {
                width: 50%;
                padding: 0.2rem;
                height: 3.4rem;
                box-sizing: border-box;
                float: left;      
                img {
                    width: 3.2rem;
                    height: 2.4rem;
                    display: block;
                }
                .ws-title {
                    font-size: 13px;
                    color: #666;
                    line-height: 1.5;
                }
            }
        }
    }
}
</style>