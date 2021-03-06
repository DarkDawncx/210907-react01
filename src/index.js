/**
 * 入口js
 * 
 * 读取本地保存的user信息
 */
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'
import App from './App';
import storageUtils from './utils/storageUtils'
import memoryUtils from './utils/memoryUtils'

const user = storageUtils.getUser()
memoryUtils.user = user

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

