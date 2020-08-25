import React from 'react'
import {Redirect} from 'umi';
export default function PrivateRoute(props) {
    //用户判断 登陆状态
    if(new Date().getDay()%2===1){
       return <Redirect to={{pathname:'/login',state:{redirect:props.location.pathname}}}></Redirect>
    }
    return (
        <div>
            PrivateRoute{props.children}
        </div>
    )
}
