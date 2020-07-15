<template>
    <div class="name-input">
        <div class="input-title">{{title}}</div>

        <ValidationProvider :rules="validate" v-slot="{ errors }" tag="div">
            <input :type="passwordType" class="input-in" :name="name" :placeholder="placeholder" autocomplete="off"
                   v-model="inputValue">
            <span class="valided">{{ errors[0] }}</span>
        </ValidationProvider>

        <slot></slot>
    </div>
</template>

<script>
  import {ValidationProvider} from 'vee-validate';

  export default {
    name: "NameInput",
    components: {
      ValidationProvider
    },
    props: {
      value: {
        type: String,
        default: '',
        required: false
      },
      title: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      placeholder: {
        type: String,
        required: true
      },
      passwordType: {
        type: String,
        default: 'text'
      },
      validate: {
        type: String,
        default: ''
      }
    },
    computed:{
      inputValue: {
        get:function() {
          return this.value;
        },
        set:function(value) {
          this.$emit('input', value);
        }
      }
    }
  }
</script>

<style lang="less" scoped>
    .name-input {
        position: relative;

        .input-title {
            margin-top: 5px;
            font-size: 18px;
            font-family: PingFang;
            color: #464141;
        }

        .input-in {
            border: none;
            border-bottom: 1px solid #979797;
            width: 100%;
            height: 30px;
            font-size: 16px;
        }

        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1000px white inset; //使用足够大的纯色内阴影覆盖黄色背景
        }

        .input-in {
            outline: 0px;
        }

        .valided {
            color: red;
            font-size: 12px;
        }

        /* 使用webkit内核的浏览器 */

        input::-webkit-input-placeholder {
            color: #C0C0C0;
            font-size: 16px;
        }

        /* Firefox版本4-18 */

        input:-moz-placeholder {
            color: #C0C0C0;
            font-size: 16px;
        }

        /* Firefox版本19+ */

        input::-moz-placeholder {
            color: #C0C0C0;
            font-size: 16px;
        }

        /* IE浏览器 */

        input:-ms-input-placeholder {
            color: #C0C0C0;
            font-size: 16px;
        }
    }

</style>
