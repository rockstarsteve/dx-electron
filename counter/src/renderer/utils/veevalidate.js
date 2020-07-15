import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

extend('minmax', {
  validate (value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: '字段长度应在 {min} 到 {max}'
})

extend('required', {
  ...required,
  message: '字 段 不 能 为 空'
})
