<template>
    <div class="container">
        <ValidationObserver v-slot="{ passes }" tag="div">
            <form class="form" @submit.prevent="passes(submit)">
                <img :src="logoImg" class="logo-img" alt="">
                <img :src="logoBg" class="logo-bg-img" alt="">

                <div class="form-title">智能化呼叫平台</div>

                <div class="input-group">
                    <name-input class="name-input-first" :title="'网点编号*'" :name="'officeNo'" :placeholder="'请输入具体网点编号'"
                                :validate="'required'" v-model="officeNo"/>
                    <name-input :title="'柜员号*'" :name="'ServeNo'" :placeholder="'请输入您的柜员号'"
                                :validate="'required|minmax:2,20'" v-model="ServeNo"/>
                    <name-input class="name-input-last" :title="'密码*'" :name="'password'" :placeholder="'请输入您的密码'"
                                :passwordType="passwordType" ref="password" :validate="'required'" v-model="password">
                    <span class="show-pwd" @click="showPwd">
                      <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
                    </span>
                    </name-input>
                </div>

                <button type="submit" class="login-btn">登录</button>

                <div class="set-paramter">
                    <div @click="goSetParamer()" class="">
                        <span>参数设置</span>
                        <img :src="papxerSet" alt="">
                    </div>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
  import NameInput from './components/NameInput'
  import {ValidationObserver} from 'vee-validate';
  export default {
    name: 'index',
    components: {
      NameInput, ValidationObserver
    },
    data() {
      return {
        logoImg: require('assets/images/login/logo.png'),
        logoBg: require('assets/images/login/login-bg.png'),
        papxerSet: require('assets/images/login/right.png'),
        passwordType: 'password',
        officeNo: '',
        ServeNo: '',
        password: '',
      }
    },
    methods: {
      login() {
        console.log('登录成功。。。')
        this.$electron.ipcRenderer.send('switchToHome')
      },
      submit() {
        console.log("提交。。。")
        this.$router.push({path: 'main'})
      },
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = 'text'
        } else {
          this.passwordType = 'password'
        }
        this.$nextTick(() => {
          this.$refs.password.$el.getElementsByClassName("input-in")[0].focus
        })
      },
      goSetParamer() {
        this.$router.push({path: 'paramer-set'})
      }
    },
  }
</script>

<style lang="less" scoped>
    .container {
        .form {
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 1);
            position: absolute;
            padding-top: 90px;
            padding-left: 60px;
            padding-right: 60px;

            .logo-img{
                position: absolute;
                width: 110px;
                height: 35px;
                left: 50px;
                top: 30px;
            }

            .logo-bg-img{
                width: 200px;
                height: 200px;
                position: absolute;
                bottom: 0;
                right: 0;
            }

            .form-title{
                font-size: 30px;
                text-align: center;
            }

            .input-group > div{
                margin-bottom: 20px;
            }


            .input-group > div:first-child{
                margin-top: 50px;
            }

            .input-group > div:last-child{
                margin-bottom: 30px;
            }

            .login-btn{
                width: 100%;
                height: 40px;
                border-radius: 13px;
                font-size: 26px;
                background-color: #FF4E5B;
                color: rgba(255, 255, 255, 1);
            }

            .set-paramter{

                display: flex;
                justify-content: center;
                color: #FF4E5B;
                font-size: 20px;
                margin-top: 45px;
                align-items: center;
            }

            & > div:hover {
                cursor: pointer;
            }

            & img {
                margin-left: 11px;
                width: 18px;
                height: 18px;
            }

        }
    }
</style>
