<template lang="pug">
  div 图书页面
    #info
      button(open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin")
</template>

<script>
import qcloud from 'wafer2-client-sdk'
import config from '@/config'
export default {
  data () {
    return {
      userInfo: {},
      logged: false
    }
  },
  methods: {
    doLogin () {
      const session = qcloud.Session.get()

      if (session) {
        qcloud.loginWithCode({
          success: res => {
            this.setData({ userInfo: res, logged: true })
          },
          fail: err => {
            console.error(err)
          }
        })
      } else {
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: res => {
            this.setData({ userInfo: res, logged: true })
          },
          fail: err => {
            console.error(err)
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
button {
  width: 10px;
  height: 10px;
}
</style>
