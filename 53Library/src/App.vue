<script>
import { get } from './util'
import config from './config'
import qcloud from 'wafer2-client-sdk'

export default {
  async created () {
    console.log('小程序已启动...')
    // qcloud.setLoginUrl(config.loginUrl)
    // qcloud.login({
    //   success (userInfo) {
    //     console.log('登录成功', userInfo)
    //   },
    //   fail (err) {
    //     console.log('登录失败', err)
    //   }
    // })
  }
}
</script>
