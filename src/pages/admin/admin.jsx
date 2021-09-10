import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
//引入本地存储
import memoryUtils from '../../utils/memoryUtils'
//引入组件
import LeftNav from '../../components/left-nav'
import RightHeader from '../../components/right-header'
//引入子路由
import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../chart/bar'
import Line from '../chart/line'
import Pie from '../chart/pie'
//定义全局变量
const { Header, Footer, Sider, Content } = Layout;


/**
 * 后台页面的路由组件
 * 但是这里面直接使用了components里面的组件，减少了代码量的同时方便调用统一布局
 * 但是制作的流程还是差不多，使用antd组件，然后修改样书
 */
function Admin() {
    //如果未登录状态直接返回登陆页面
    const user = memoryUtils.user
    if (!user || !user._id) {
        //自动重定向至登陆
        return <Redirect to='/login' />
    }

    return (
        <Layout style={{ height: "100%", width: "100%" }}>
            <Sider><LeftNav /></Sider>
            <Layout>
                <Header><RightHeader /></Header>
                <Content style={{ margin: "20px", backgroundColor: "white" }}>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/category' component={Category} />
                        <Route path='/product' component={Product} />
                        <Route path='/role' component={Role} />
                        <Route path='/user' component={User} />
                        <Route path='/bar' component={Bar} />
                        <Route path='/line' component={Line} />
                        <Route path='/pie' component={Pie} />
                        <Redirect to='/home' />
                    </Switch>
                </Content>
                <Footer style={{ textAlign: "center", color: "black" }}>推荐使用DDLa浏览器，可以获得更佳页面体验<a href="#">下载</a></Footer>

            </Layout>
        </Layout>
    );
}
export default Admin;