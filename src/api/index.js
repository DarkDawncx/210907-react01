/**
 * 要求：能根据接口文档定义接口请求
 * 包含应用中所有接口请求函数的模块
 * 每个函数的返回值都是promise
 */
import jsonp from 'jsonp'
import { message } from 'antd'
import ajax from './ajax'
//使用正常函数写
// export default function reLogin(username, password) {
//     return ajax('/Login', { username, password }, 'POST')
// }
//使用es6箭头函数编写
//用户登陆
export const reqLogin = (username, password) => ajax('/Login', { username, password }, 'POST')
//添加用户
export const reqAddUser = (user) => ajax('/manager/user/add', { user }, 'POST')
//json请求的接口请求函数
export const reqWeather = (cityID) => {
    const url = 'https://restapi.amap.com/v3/weather/weatherInfo?key=98b966bcdf74b7cd6cef29ca7336d11c&city=' + cityID
    return new Promise((resolve, reject) => {
        //发送jsonp请求
        jsonp(url, {}, (err, response) => {
            if (response.status == '1') {
                //取出需要的数据
                const weather = response.lives[0].weather
                resolve(weather)
            } else {
                message.error('获取天气信息失败')
            }
        })
    })

}
