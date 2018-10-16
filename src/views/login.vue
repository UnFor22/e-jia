<template>
    <div class="login">

        <heads></heads>
        <div class="login-logo">
            <div class="login-logo-wrap">
                <img src="../assets/logo.png" style="height:1rem" alt="">
            </div>
        </div>
        <form action="" class="login-form">
            <input type="text" placeholder="身份证号" class="login-form-item">
            <input type="password" placeholder="密码" class="login-form-item">
            <input type="button" value="登录" class="login-button">
        </form>
    </div>
   
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang='scss'>
    .login {
        background: #c50206;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right:0;
        width: 7.2rem;
        height: 100%;

        .login-logo {
            margin: 0.9rem;

            .login-logo-wrap { 
                img {
                    display: block;
                    margin: 0 auto;
                }
            }
        }
        .login-form {
            padding: 0 0.7rem;
            line-height: 1rem;
            .login-form-item {
                width: 100%;
                height: 0.8rem;
                border: 2px solid #ff0;
                border-radius: 4px;
                margin-bottom: 0.2rem;
                background: #c50206;
                color: #fff;
                padding: 0.1rem;
                box-sizing: border-box;
            }
            ::-webkit-input-placeholder {
                color: #fff;
                font-size: 14px;
                font-weight: 300;
            }
            .login-button {
                width: 100%;
                height: 0.8rem;
                border-radius: 4px;
                background: #e3574f;
                color: #fff;
                font-size: 14px;
                border: 0;
            }
        }
    }
</style>