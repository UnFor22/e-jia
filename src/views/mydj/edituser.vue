<template>
    <div>
        <div class="header">   
            <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
            <span class="title">修改个人信息</span>
            <span class="bianji" @click="handlEdit">保存</span>
        </div>
        <div class="edituser">
            <ul class="edituser-wrap">
                <li class="clearfix edit-item">
                    <span class="title fll">头像</span>
                    <span class="upload flr input-wrap img1">
                        <img :src="formData.header" alt="" class="avatar">
                        <input type="file" name="file" class="uploadimg" @change="upload" > 
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">姓名</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.username" v-model="formData.username">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">身份证</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.idCard" v-model="formData.idCard">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">家庭住址</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.hometown" v-model="formData.hometown">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">工作地址</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.address" v-model="formData.address">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">民族</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.nation" v-model="formData.nation">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">微信号</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.wxNum" v-model="formData.wxNum">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">QQ号</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.qqNum" v-model="formData.qqNum">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">性别</span>
                    <span class="flr input-wrap">
                        <input type="radio" class="radio-item" value="1" v-model="formData.sex">男
                        <input type="radio" class="radio-item" value="0" v-model="formData.sex">女
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">最高学历</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.education" v-model="formData.education">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">职称</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.jobRank" v-model="formData.jobRank">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">薪资水平</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.salary" v-model="formData.salary">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">入党时间</span>
                    <span class="flr input-wrap time">
                        <span class="time-title">{{formData.joinPartyTime}}</span>
                        <input type="date" class="time-input" v-model="formData.joinPartyTime">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">党费最后缴纳时间</span>
                    <span class="flr input-wrap time">
                        <span class="time-title">{{formData.lastPayTime}}</span>
                        <input type="date" class="time-input" v-model="formData.lastPayTime">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">当前身份</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.partyIdentity" v-model="formData.partyIdentity">
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        
        data () {
            return {
                formData:{}
            }
        },
        methods: {
            getData(){
                this.$axios.get('/user/userInfo.do').then(
                    res=>{
                        // console.log(res)
                        this.formData = res.data
                    }
                )
            },
            upload(event){
                // console.log(event)
                // let file = event.target.files[0]
                // var reader = new FileReader();  
                // var preview = document.querySelector('#pic')
                // reader.onloadend = ()=>{  
                //     preview.src = reader.result
                //     let imgsrc = reader.result.split(',')[1]
                    
                //     this.$axios.post(`/image/uploadBase64.do`,{myFile:imgsrc}).then (res => {
                //         console.log(res)
                //         this.informations.header = res.url
                //     })
                //     this.getData()
                // };  
                // reader.readAsDataURL(file); 
            },
            handlEdit(){
                delete this.formData.idCard
                delete this.formData.header
                console.log(this.formData)
                this.$axios.post('/user/modifyInfo.do',this.formData).then (res => {
                    console.log(res)  
                })
                this.getData()
            },

        },
        created(){
            this.getData()
        }
    }
</script>

<style lang='scss'>
.header {
    height: 0.88rem;
    background: #c50206;
    line-height: 0.88rem;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 998;
    padding: 0 0.2rem;
    color: #fff;
    font-size: 18px;
    .iconfont {
        float: left;
        font-size: 18px;
    }
    .title {
        font-weight: 400;
        vertical-align: top;
    }
    .bianji {
        float: right;
        font-weight: 300;
    }
}
.edituser {
    margin-top: 0.88rem;
    .edituser-wrap {
        .edit-item {
            height: 1rem;
            line-height: 1rem;
            box-sizing: border-box;
            border-bottom: 1px solid #ddd;
            font-size: 14px;
            color: #444;
            position: relative;
            .title {
                margin-left: 14px;
            }
            
            .upload {
                display: inline-block;
                height: 1rem;
                input {
                    display: block;
                    height: 100%;
                    border: transparent;
                }
                .uploadimg {
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    z-index: 222;
                    opacity: 0;
                }
               
            }
            .input-wrap {
                margin-right: 14px;
                
                .input {
                    text-align: right;
                    display: block;
                    height: 0.8rem;
                    margin-top: 0.1rem;
                    border: transparent;
                }
                .input:focus {
                    outline: none;
                }
                .avatar{
                    width: 0.8rem;
                    height: 0.8rem;
                    margin-top: 0.1rem;
                    z-index: 998;
                }
            }
            .time {
                text-align: right;
                position: relative;
                .time-title{
                    z-index: 998;
                    float: right;
                }
                .time-input {
                    z-index: 222;
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    opacity: 0;
                }
                .time-input:focus {
                    outline: none;
                }
            }
        }
    }
}
</style>