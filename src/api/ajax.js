/**
 * 能发送异步ajax请求的函数模块
 * 封装axios库
 * 函数的返回值是promise对象，因为请求是异步的会有两种结果，一个resolved状态和rejected状态
 * 优化:统一处理数据请求异常,使用promise包裹外部，不使用reject而是使用catch去alert
 * 优化2：直接返回response.data省略一次解构赋值
 */
import axios from 'axios'
import { message } from 'antd'
export default function ajax(url, data = {}, type) {

    return new Promise((resolve, reject) => {
        let promise
        //1.执行异步ajax请求
        if (type === 'GET') {      //发送get请求
            promise = axios.get(url, {//配置对象
                params: data       //指定请求参数
            })
        } else {                   //发送POST请求
            promise = axios.post(url, data)
        }
        //2.fulfilled状态调用resolve(value)
        promise.then(response => {
            resolve(response.data)
        }).catch(error => { message.error('请求出错了' + error.message) })
        //3.rejected状态提示异常信息
    })
}

//请求登陆接口
// ajax('/login', { usename: 'Tom', password: '12345' }, 'POST').then()
//添加用户