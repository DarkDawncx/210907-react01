/**
 * 应用的根组件
 */
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'//使用BrowserRouter而不是HashRouter的原因是为了前者在url中不会出现#，而后者会

import Login from './pages/login/login'//登录后子路径要写 /login
import Admin from './pages/admin/admin'//登陆后为了保证子路径无前缀所以一般path写成 /


function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/' component={Admin}></Route>
            </Switch>
        </BrowserRouter>
    );
}
export default App