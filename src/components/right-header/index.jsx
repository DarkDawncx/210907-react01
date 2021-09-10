import React, { useEffect, useState } from 'react';
import { withRouter, useLocation, useHistory } from 'react-router-dom'
import { reqWeather } from '../../api'
import menuList from '../../config/menuConfig'
import { formateDate } from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import LinkButton from '../../components/link-button'
import './index.less';
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { pinyin } from 'pinyin-pro';

const { confirm } = Modal;

function RightHeader() {
    let history = useHistory();
    const [dateTime, setDateTime] = useState('');
    // const dateTime = formateDate(Date.now());
    const [weather, setWeather] = useState('');
    // const weather = reqWeather(370211);
    const username = memoryUtils.user.username;
    // console.log(dateTime, weather);
    const [title, setTitle] = useState('');
    //请求时间
    useEffect(() => {
        setInterval(() => {
            setDateTime(formateDate(Date.now()))
        }, 1000);
        return () => clearInterval();
    }, [dateTime])
    //请求天气
    useEffect(async () => {
        setWeather(await reqWeather(370211))
    }, [weather])
    //请求标题
    const path = useLocation().pathname

    useEffect(() => {
        menuList.forEach(item => {
            if (item.key === path) {
                setTitle(item.title)
            } else if (item.children) {
                item.children.forEach(cItem => {
                    if (path.indexOf(cItem.key) === 0) {
                        setTitle(cItem.title)
                    }
                })
            }
        })
    })
    //登出部分
    //点击登出函数
    function showConfirm() {
        confirm({
            title: '提示框',
            icon: <ExclamationCircleOutlined />,
            content: '退出',
            onOk() {
                //删除user数据
                storageUtils.removeUser()
                memoryUtils.user = {}
                //返回login页面
                history.replace('/login')
                console.log('是');
            },
            onCancel() {
                console.log('否');
            },
        });
    }
    //设置返回图片
    // const [url, setUrl] = useState('');
    // const py = pinyin(weather, { tontType: 'none' });
    // setUrl('http://api.map.baidu.com/images/weather/day/' + py + '.png');
    return (
        <div className="right-header">
            <div className="right-header-top">
                <span>欢迎，{username}</span>
                <LinkButton onClick={showConfirm}>退出</LinkButton>
            </div>
            <div className="right-header-bottom">
                <div className="right-header-bottom-left">{title}</div>
                <div className="right-header-bottom-right">
                    <span>{dateTime}</span>
                    <img src="http://api.map.baidu.com/images/weather/day/duoyun.png" alt="weather" />
                    <span>{weather}</span>
                </div>
            </div>
        </div>
    );
}
export default withRouter(RightHeader);