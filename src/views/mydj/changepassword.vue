<template>
    <div>
        <heads></heads>
        <div class="change-wrap">
            <form class="changepassword">  
                <div class="change-item-title">旧密码：</div>
                <input type="password">     
                <div class="change-item-title">新密码：</div>
                <input type="password">
                <div class="change-item-title">确认密码：</div>
                <input type="password">
                <input type="button" value="确定" class="button">
            </form>
        </div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
.change-wrap {
    // margin-top: 0.88rem;
    .changepassword {
        width: 6rem;
        margin: 2.0rem auto 0;
        .change-item-title {
            font-size: 16px;
            color: #666;
            margin-bottom: -0.3rem;
        }
        input {
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 100%;
            height: 0.8rem;
            margin: 0.2rem 0;
        }
        .button {
            background: #ef473a;
            color: #fff;
            height: 1.0rem;
        }
    }
}

</style>