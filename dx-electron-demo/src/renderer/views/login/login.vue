<template>
    <div class="container">
        <img :src="LogoImg" class="logo-img drag-div" alt="">
        <img :src="bottomBgImg" class="bottom-bg" alt="">
        <div class="title">智能化呼叫平台</div>

        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
                 label-position="left">

            <el-form-item prop="deptId">
                <div class="input-title">网点编号*</div>
                <el-input
                        ref="deptId"
                        v-model="loginForm.deptId"
                        placeholder="请输入网点编号"
                        name="deptId"
                        type="text"
                        tabindex="1"
                        auto-complete="on"
                />
            </el-form-item>

            <el-form-item prop="serveruser">
                <div class="input-title">柜员号*</div>
                <el-input
                        ref="deptId"
                        v-model="loginForm.serveruser"
                        placeholder="请输入柜员号"
                        name="serveruser"
                        type="text"
                        tabindex="1"
                        auto-complete="on"
                />
            </el-form-item>

            <el-form-item prop="password">
                <div class="input-title">密码*</div>
                <el-input
                        ref="deptId"
                        v-model="loginForm.password"
                        placeholder="请输入密码"
                        name="password"
                        type="text"
                        tabindex="1"
                        auto-complete="on"
                />
                <!--                <div class="show-pwd" @click="showPwd">-->
                <!--          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />-->
                <!--            </div>-->
            </el-form-item>


            <el-button class="login-btn" @click="login">登录</el-button>
        </el-form>

    </div>
</template>

<script>
  import {ipcRenderer} from "electron";

  export default {
    name: "login",
    data() {
      const validateDeptId = (rule, value, callback) => {
        if (value == null || value == '' || value == undefined) {
          callback(new Error('请输入网点编号'))
        } else {
          callback()
        }
      }
      const validateUsername = (rule, value, callback) => {
        if (value == null || value == '' || value == undefined) {
          callback(new Error('请输入柜员号'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码长度不能少于6'))
        } else {
          callback()
        }
      }
      return {
        LogoImg: require('../../assets/images/login/logo.png'),
        bottomBgImg: require('../../assets/images/login/bottom-bg.png'),
        loginForm: {
          deptId: '',
          serveruser: '',
          password: '',
        },

        loginRules: {
          deptId: [{required: true, trigger: 'blur', validator: validateDeptId}],
          serveruser: [{required: true, trigger: 'blur', validator: validateUsername}],
          password: [{required: true, trigger: 'blur', validator: validatePassword}]
        },
      }
    },
    methods:{
      login(){
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            ipcRenderer.send('openMainWindow')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
    .container {
        position: relative;
        width: 100%;
        height: 100%;
        padding-left: 80px;
        padding-right: 80px;
        padding-top: 100px;
        /*background: #fff8f7;*/
        background:rgba(250,250,250,1);

        .logo-img {
            position: absolute;
            left: 40px;
            top: 40px;
            width: 150px;
            height: 45px;
        }

        .bottom-bg {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 200px;
            height: 200px;
        }

        .title {
            margin-top: 20px;
            text-align: center;
            font-weight: bolder;
            font-size: 24px;
        }

        .login-form {
            margin-top: 10px;

            .el-form-item {
                margin-top: 0;
                margin-bottom: 16px;
                /deep/.el-form-item__content{
                    line-height: normal;
                }
            }

            .el-form-item:first-child{
                margin-top: 30px;

            }

            .input-title {
                font-size: 14px;
            }

            .login-btn {
                margin-top: 30px;
                width: 100%;
                background-color: #FF4E5B;
                color: #FFFFFF;
            }
        }
    }
</style>
