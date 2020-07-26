<template>
    <div class="container">
        <div class="left">
            <img :src="LogoImg" class="logo-img drag-div" alt="">
            <img :src="bottomBgImg" class="bottom-bg" alt="">
        </div>
        <div class="right">
            <div class="headers drag-div">
                <div class="headers-left">
                    <img :src="callImg" class="call-img" alt="">
                    <div class="call-title">智能化呼叫平台</div>
                </div>
                <div class="header-right drag-not-div">
                    <img :src="userImg" class="user-img" alt="">
                    <div class="username">张扬</div>
                    <button class="logout-btn" @click="logout">退出</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import '../../utils/resizepx'
  import {ipcRenderer} from 'electron'

  const {dialog} = require('electron').remote
  export default {
    name: "main",
    data() {
      return {
        LogoImg: require('../../assets/images/login/logo.png'),
        bottomBgImg: require('../../assets/images/login/bottom-bg.png'),
        callImg: require('../../assets/images/login/call-logo.png'),
        userImg: require('../../assets/images/login/user.jpg'),
      }
    },
    methods: {
      logout() {
        dialog.showMessageBox({
          type: "info",
          title: "提示",
          message: "确定退出系统吗",
          buttons: ['ok', 'no']
        }).then((response) => {
          console.log("index----------", response)
          if (response.response === 0) {
            ipcRenderer.send('exsitSys')
          }
        })

      }
    }
  }
</script>

<style lang="less" scoped>
    .container {
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;

        .left {
            width: 60%;
            height: 100%;
            background: rgba(250, 250, 250, 1);
            box-shadow: 8px 2px 61px 0px rgba(0, 0, 0, 0.04);
            position: relative;

            .logo-img {
                position: absolute;
                left: 0.3rem;
                top: 0.2rem;
                width: 1rem;
                height: 0.3rem;
            }

            .bottom-bg {
                position: absolute;
                right: -0.3rem;
                bottom: -0.3rem;
                width: 2rem;
                height: 2rem;
            }

        }

        .right {
            width: 40%;
            height: 100%;
            background: rgb(245, 245, 245);

            .headers {
                height: 0.7rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding-left: 0.2rem;
                padding-right: 0.2rem;

                .headers-left {
                    display: flex;
                    align-items: center;

                    .call-img {
                        width: 0.3rem;
                        height: 0.3rem;
                    }

                    .call-title {
                        font-size: 0.2rem;
                        font-weight: bold;
                        margin-left: 0.05rem;
                    }
                }

                .header-right {
                    display: flex;
                    align-items: center;

                    .user-img {
                        width: 0.25rem;
                        height: 0.25rem;
                        border: 0.02rem solid rgba(255, 78, 91, 0.43);
                        border-radius: 50%;
                    }

                    .username {
                        font-size: 0.15rem;
                        margin-left: 0.05rem;

                    }

                    .logout-btn {
                        font-size: 0.14rem;
                        height: 0.25rem;
                        background-color: #ffffff;
                        outline: none;
                        border-radius: 0.06rem;
                        border: 0.01rem solid rgba(255, 78, 91, 1);
                        padding-left: 0.08rem;
                        padding-right: 0.08rem;
                        margin-left: 0.08rem;
                    }
                }
            }
        }
    }
</style>
