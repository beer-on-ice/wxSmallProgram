// 工具函数库
import config from './config'
import {
  request
} from 'https'
export function get (url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      method: 'GET',
      success: function (res) {
        if (res.data.code === 0) {
          resolve(res.data.data)
        } else {
          reject(res.data.data)
        }
      }
    })
  })
}
