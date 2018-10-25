<template>
    <div class="dstoday">
        <heads></heads>
        <div class="dstoday-wrap">
            <div class="ds-item" v-html="content">    
            </div>
        </div>
    </div>
</template>

<script>
import getUrl from '../../utils/getToday.js'
import cheerio from 'cheerio'
    export default {
        data () {
            return {
                content: ''
            }
        },
        methods: {
            getData(){
                let month = new Date().getMonth() + 1
                let day = new Date().getDate()
                month = month >= 10 ? month + '' : '0'+ month
                day = day >= 10 ? day + '' : '0' + day
                let url = getUrl(month,day)
                this.$axios.get('/proxy/proxy.do',url).then(res => {
                    // console.log(res)
                    const $ = cheerio.load(res)
                    this.content = $('.p1_02').html()  
                })
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style lang='scss'>
.dstoday-wrap {
    margin-top: 0.88rem;
    padding: 0.2rem;
    color: #000;
    
    h1 {
        font-size: 24px;
        font-weight: 500;
        text-align: center;
    }
    h2 {
        margin: 0.3rem 0 0.2rem;
        font-size: 20px;
        font-weight: 500;
    }
    p {
        line-height: 2;
        font-size: 14px;
        text-indent: 2em;
        margin-bottom: 0.1rem;
    }
}
</style>