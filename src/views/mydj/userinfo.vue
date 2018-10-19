<template>
    <div>
        <div class="header">   
            <i class="iconfont icon-zuojiantou" @click="$router.back()"></i>
            <span class="title">个人信息</span>
            <span class="bianji">编辑</span>
        </div>
        <div class="user-wrap">
            <div class="user-item clearfix">
                <span class="fll user-item-option">头像</span>
                <img :src="formData.header" class="flr" />
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">姓名</span>
                <span class="flr">{{formData.username}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">身份证</span>
                <span class="flr">{{formData.idCard}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">家庭住址</span>
                <span class="flr">{{formData.hometown}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">工作地址</span>
                <span class="flr">{{formData.address}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">民族</span>
                <span class="flr">{{formData.nation}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">微信号</span>
                <span class="flr">{{formData.wxNum}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">QQ号</span>
                <span class="flr">{{formData.qqNum}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">性别</span>
                <span class="flr">{{formData.sex}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">最高学历</span>
                <span class="flr">{{formData.education}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">昵称</span>
                <span class="flr">{{formData.jobRank}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">薪资水平</span>
                <span class="flr">{{formData.salary}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">入党时间</span>
                <span class="flr">{{formData.joinPartyTime}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">党费最后缴纳时间</span>
                <span class="flr">{{formData.lastPayTime}}</span>
            </div>
            <div class="user-item clearfix">
                <span class="fll user-item-option">当前身份</span>
                <span class="flr">{{formData.partyIdentity}}</span>
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
                this.$axios.get('/user/userInfo.do').then(res => {
                    // console.log(res)
                    this.formData = res.data        
                })
            }
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
.user-wrap{
    margin-top: 0.88rem;
    .user-item {
        height: 0.9rem;
        padding: 0.2rem;
        box-sizing: border-box;
        border-bottom: 1px solid #ddd;
        vertical-align: middle;
        img {
            height: 0.5rem;
            vertical-align: middle;
        }
        span {
            font-size: 14px;
            color: #444;
            display: block;
            height: 0.5rem;
            line-height: 0.5rem;
        }
    }
}
</style>