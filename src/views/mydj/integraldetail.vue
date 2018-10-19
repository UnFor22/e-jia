<template>
    <div>
        <heads></heads>
        <div class="integarl-wrap">
            <div class="integraldetail" v-for="item in formData" :key="item.id">
                <div class="integral-title clearfix">
                    <span class="fll">{{item.typeName}}</span>
                    <span class="flr red">{{item.singleDesc}}</span>
                </div>
                <div class="integral-time">
                    {{item.timeFormat}}
                </div> 
            </div>
        </div>
       
    </div>
</template>

<script>
    export default {
        data(){
            return{
                formData:{}
            }
        },
        methods:{
            getData(){
                this.$axios.get('/integral/integralList.do?page=1&rows=10').then(res => {
                    console.log(res)
                    this.formData = res.rows  
                })
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped lang='scss'>
.integarl-wrap{
    margin-top: 0.88rem;
    .integraldetail {
        padding: 0.3rem;
        height: 1.5rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        .integral-title {
            font-size: 18px;
            color: #333;
            .red {
                color: red;
            }
        }
        .integral-time {
            font-size: 14px;
            color: #444;
            margin-top: 0.1rem;
        }
    }
}

</style>