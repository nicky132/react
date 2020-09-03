import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch, Redirect } from 'react-router-dom'
//学习saga 管理登陆页面islogin权限
import { connect } from "react-redux";
import {login}  from "../store/user";

function ProductList(props) {
    // return <h3>ProductList</h3>
    return (
        <div>
            <h3>ProductList</h3>
            <Link to="/detail/web">web全栈</Link>
        </div>
    )
}
function Detail({ match, history, location }) {
    console.log(match, history, location);
    return (
        <div>
            <h3>Detail</h3>
            {match.params.name}
            <button onClick={history.goBack}>后退</button>
        </div>
    );
}
function ProductMgt(props) {
    // return <h3>ProductMgt</h3>
    return (
        <div>
            <h3>ProductMgt</h3>
            <Link to="/management/add">新增</Link>
            <Link to="/management/search">搜索</Link>
            <Route path="/management/add" component={() => <div>add</div>} />
            <Route path="/management/search" component={() => <div>search</div>} />
            <Redirect to="/management/add"></Redirect>
        </div>
    )
}

// //路由守卫，通过组件包装Route得到一个PrivateRoute
// //为其扩展一个用户状态检查功能
// function PrivateRoute({ component: Component, isLogin, ...rest }) {
//     return (
//         //这里的props就是{match,history,location}参数
//         <Route
//             {...rest}
//             render={
//                 props => isLogin ? (
//                     <Component></Component>
//                 ) : (
//                         <Redirect to={{ pathname: '/login', state: { redirect: props.location.pathname } }}></Redirect>
//                     )
//             }></Route>
//     )
// }


//路由守卫，通过组件包装Route得到一个PrivateRoute
//为其扩展一个用户状态检查功能
//用connect包装,connect里面形参做映射
const PrivateRoute = connect(state => ({ isLogin: state.user.isLogin }))(function ({ component: Component, isLogin, ...rest }) {
    return (
        //这里的props就是{match,history,location}参数
        <Route
            {...rest}
            render={
                props => isLogin ? (
                    <Component></Component>
                ) : (
                        <Redirect to={{ pathname: '/login', state: { redirect: props.location.pathname } }}></Redirect>
                    )
            }></Route>
    )
})

//学习saga
const Login = connect(
    state => ({
        isLogin:state.user.isLogin,
        loading:state.user.loading,
        error:state.user.error
    }),
    {login}//派发
)(({location,isLogin,login,loading,error}) => {//登陆错误信息
    const redirect = location.state.redirect || "/";
    //若已登陆重定向至redirect
    if(isLogin) return <Redirect to={redirect} />;

    return(
        <div>
            <p>用户登录</p>
            <hr />
            {/* 显示错误信息 */}
            {error && <p>{error}</p>}
            {/* 显示传参 */}
            <button onClick={() => login("Jerry")} disabled={loading}>
               {loading?"登录中...":"登录"}
            </button>
        </div>
    )
})


export default class RouterTest extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav>
                    <Link to="/">商品列表</Link>
                    <Link to="/management">商品管理</Link>
                </nav>
                {/* 配置路由 */}
                {/* <Route path="/management" component={ProductList} />
                <Route path="/" component={ProductMgt} /> */}
                {/* 上面的路由两种都会匹配上，没有精确匹配，精确匹配用到switch组件或者Route组件的exact属性 */}

                {/* <Switch>
                    <Route path="/management" component={ProductList} />
                    <Route path="/" component={ProductMgt} />
                </Switch> */}
                {/* 用Switch组件实现 */}

                {/* <Route path="/management" component={ProductList} />
                <Route exact path="/" component={ProductMgt} /> */}
                {/* 用exact属性实现 */}

                {/* <Route exact path="/" component={ProductList} />
                <Route path="/detail/:name" component={Detail}/>
                <Route path="/management" component={ProductMgt} /> */}
                {/*  */}
                {/* 新加404页面 */}
                {/* <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/detail/:name" component={Detail} />
                    <Route path="/management" component={ProductMgt} />
                    <Route component={() => <h3>页面不存在</h3>} />
                </Switch> */}

                {/* <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/detail/:name" component={Detail} />
                    <PrivateRoute path="/management" component={ProductMgt} isLogin={true} />
                    <Route path="/login" component={() => <div>login page</div>} />
                    <Route component={() => <h3>页面不存在</h3>} />
                </Switch>
                做导航卫视 */}

                <Switch>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/detail/:name" component={Detail} />
                    <PrivateRoute path="/management" component={ProductMgt} isLogin={true} />
                    <Route path="/login" component={Login} />
                    <Route component={() => <h3>页面不存在</h3>} />
                </Switch>
                 {/* 做导航卫视
                 学习saga */}
            </BrowserRouter>
        )
    }
}
