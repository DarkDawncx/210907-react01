import React, { useState, useEffect } from 'react';
import { Link, withRouter, useLocation } from 'react-router-dom'
import { Menu } from 'antd';
import './index.less';
import logo from '../../assets/images/logo.jpg';
import menuList from '../../config/menuConfig'
const { SubMenu } = Menu;
/**
 * 路由变为二级路由时，不能打开上一层，（md this该怎么改 啊）
 */
function LeftNav() {
    function getMenuNodes(menuList) {
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                if (item.children.find(cItem => path.indexOf(cItem.key) === 0)) {
                    console.log(item.key);
                    // this.openKey = item.key
                    // setOpenKey(item.key)
                }
                return (
                    <SubMenu key={item.key} icon={item.icon} title={
                        <span>{item.title}</span>
                    }>
                        {getMenuNodes(item.children)}
                    </SubMenu>)
            }
        })
    }
    //获取当前请求路径
    // console.log(useLocation());
    const path = useLocation().pathname;
    // const openKeys = this.openKey
    // const [openKey, setOpenKey] = useState();
    return (
        <div className="left-nav">
            <Link to='/' className="left-nav-header">
                <img src={logo} alt="logo" />
                <h1>后台管理</h1>
            </Link>
            <Menu
                selectedKeys={[path]}
                defaultOpenKeys={[path]}
                mode="inline"
                theme="dark"
            >
                {getMenuNodes(menuList)}
            </Menu>
        </div>
    );
}
//withRouter是一种高阶组件，包装非路由组件，返回一个新的组件
//新的组件向非路由组件传递三个属性：history | location  | match
export default withRouter(LeftNav);