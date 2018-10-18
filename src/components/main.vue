<template>
    <div>
        <div class="newdetail-wrap">
            <div :model="formData" class="news">
                <h3 class="news-title">{{formData.title}}</h3>
                <!-- <img :src="formData.pic" alt=""> -->
                <div class="news-content" v-html='formData.content'></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                formData:{}
            }
        },
        methods: {
            getData(){
                this.id = this.$route.query.id
                this.sr = this.$route.name
                switch(this.sr)
                {
                case 'newsdetail':
                    this.tr = `/news/newsContent.do?newsId=${this.id}`
                break;
                case 'studydetail':
                    this.tr = `/news/newsContent.do?newsId=${this.id}`
                break;
                case 'throughdetail':
                    this.tr = `/news/newsContent.do?newsId=${this.id}`
                break;
                case 'identitydetail':
                    this.tr = `/news/newsContent.do?newsId=${this.id}`
                break;
                case 'studydetail1':
                    this.tr = `/news/newsContent.do?newsId=${this.id}`
                break;
                case 'shotdetail':
                    this.tr = `/news/newsContent.do?newsId=${this.id}`
                break;
                case 'builddetail':
                    this.tr = `/news/newsContent.do?newsId=${this.id}`
                break;
                case 'activedetail':
                    this.tr = `/news/newsContent.do?newsId=${this.id}`
                break;
                case 'noticedetail':
                    this.tr = `/news/newsContent.do?newsId=${this.id}`
                break;
              
                }
                this.$axios.get(`${this.tr}`).then(res =>{
                    console.log(res)
                    this.formData = res.data
                })
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style lang='scss'>
.newdetail-wrap {
    margin-top: 0.88rem;
    .news {
        padding: 0.2rem;
        box-sizing: border-box;
        .news-title {
            font-size: 24px;
            color: #000;
            line-height: 1.2;
            font-weight: 500;
            margin-bottom: 0.1rem;
        }
        .news-content {
            img {
                width: 6.8rem;
            }
            h2:first-child {
                font-size: 30px;
                line-height: 1.2;
                font-weight: 500;
                margin-bottom: 0.1rem;
            }
            p {
                font-size: 12px;
                line-height: 2;
                text-indent: 2em;
                margin-bottom: 0.1rem;
                img{
                    display: block;
                    margin: 0 auto;
                }
            }
            p:first-child {
                text-indent: 0;
            }
        }
    }
}
</style>