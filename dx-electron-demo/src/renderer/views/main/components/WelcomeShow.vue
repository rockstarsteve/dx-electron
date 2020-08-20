<template>
    <div class="welcome-show">
        <img :src="showImg" class="show-img" alt="">
        <div class="right">
            <div class="title">
                <div class="day">2020年5月29日</div>
                <div class="week">星期五</div>
            </div>
            <div class="sub-title">闰四月初七</div>

            <div class="good-bad">
                <div class="good good-bad-status">
                    <div class="good-bad-text">宜</div>
                    <div class="good-bad-content">凝神聚气</div>
                </div>
                <div class="bad good-bad-status">
                    <div class="good-bad-text">忌</div>
                    <div class="good-bad-content">目空一切</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "WelcomeShow",
    data(){
      return{
        showImg: require('../../../assets/images/main/show-img.jpg'),
      }
    }
  }
</script>

<style lang="less" scoped>
    .welcome-show{
        overflow-y: scroll;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .show-img{
            width: 2rem;
            height: 2.5rem;
            margin-right: 0.3rem;
        }
        .right{
            width: 3rem;
            background-color: pink;
            display: flex;
            flex-direction: column;
            align-items: center;
            .title{
                margin-top: 0.1rem;
                font-size: 20px;
                font-weight: bold;
                display: flex;
                align-items: center;
                .week{
                    margin-left: 15px;
                }
            }
            .sub-title{
                font-size: 15px;
                margin-top: 0.1rem;
                color: #8B8686;
            }
            .good-bad{
                margin-top: 0.2rem;
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding-left: 30px;
                padding-right: 30px;
                .good-bad-status{
                    display: flex;
                    align-items: center;
                    font-size: 20px;
                    font-weight: normal;
                    color: #ffffff;
                    .good-bad-text{
                        width: 35px;
                        height: 35px;
                        font-size: 20px;
                        border-radius: 50%;
                        background-color: #FF4E5B;
                        line-height: 35px;
                        text-align: center;
                    }
                    .good-bad-content{
                        margin-left: 10px;
                        font-size: 18px;
                    }
                }

            }

        }
    }

</style>
