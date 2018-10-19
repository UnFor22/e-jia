<template>
    <div class="dstoday">
        <heads></heads>
        <h1>党史上的今天</h1>
        <div class="dstoday-wrap">
            <div class="ds-item">
                <!-- <h2></h2>
                <p></p> -->
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                formData: [

                ]
            }
        },
        // methods: {
        //     getData(){
        //         let p1 = /(<h2>)\s+(<\/h2>)/m
        //         let p2 = /(\<p\>)\s+(\<\/p\>)/m
        //         this.$axios.get('/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70503%2Findex.html').then(res=>{
        //             console.log(res)
        //             // this.formData= [...p1.exec(res)]
        //             console.log(p1.exec(res))
        //             console.log(p2.exec(res))
        //         })
        //     }
        // },
        // created(){
        //     this.getData()
        // }
    }
</script>

<style scoped>

</style>