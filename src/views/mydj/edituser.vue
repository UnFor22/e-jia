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
                    <span v-if="this.$route.name == 'edituser'" class="flr input-wrap img1">
                        <img :src="formData.header" alt="" class="avatar">
                    </span>
                    <span class="upload flr" style="display:none" v-else>
                        <input type="file" @change="upload">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">姓名</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.leadPerson">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">身份证</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.idCard">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">家庭住址</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.hometown">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">工作地址</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.address">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">民族</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.nation">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">微信号</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.wxNum">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">QQ号</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.qqNum">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">性别</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.sex">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">最高学历</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.education">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">职称</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.jobRank">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">薪资水平</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.salary">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">入党时间</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.joinPartyTime">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">党费最后缴纳时间</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.lastPayTime">
                    </span>
                </li>
                <li class="clearfix edit-item">
                    <span class="title fll">当前身份</span>
                    <span class="flr input-wrap">
                        <input type="text" class="input" :placeholder="formData.partyIdentity">
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
                        // console.logz(res)
                        this.formData = res.data
                    }
                )
            },
            upload(event){
                console.log(event)
                let file = event.target.files[0]

            },
            handlEdit(){

            },

        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped lang='scss'>
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
    .iconfont {
        float: left;
        color: #fff; 
        font-size: 18px;
    }
    .title {
        color: #fff;
        font-size: 18px;
        font-weight: 400;
        vertical-align: top;
    }
    .bianji {
        float: right;
        color: #fff;
        font-size: 18px;
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
                position: absolute;
                right: 14px;
                top: 0.1rem;
                bottom: 0.1rem;
                // z-index: 555; 
                
                input {
                    display: block;
                    height: 100%;
                    border: transparent;
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
                    display: inline-block;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>