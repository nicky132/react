//路由守卫的作用
import React from 'react'
import Redirect from 'umi/redirect';
export default function PrivateRoute(props) {
    //用户判断 登陆状态
    //单双天需要去登录页登录
    if(new Date().getDay()%2===0){
       return <Redirect to={{pathname:'/login',state:{redirect:props.location.pathname}}}></Redirect>
    }
    return (
        <div>
            PrivateRoute{props.children}
        </div>
    )
}
