// React组件化操作 rcc
import React, { Component } from 'react'
import logo from '../old/logo.svg';
// import './index.css';//不是组件化css
import style from'../index.module.css';//组件化css

export default class JsxText extends Component {
    render() {
        //逻辑控制
        const name = 'React真帅....';
        const user = { firstName: 'tom', lastName: 'jerry' };
        const greet = <p>hello,nihao</p>;
        const title = name?<h1>{name}</h1>:null;
        // const arr = [1,2,3];
        const arr = [1,2,3].map(num => <li key={num}>{num}</li>);
        function formatName(user) {
            return user.firstName + ' ' + user.lastName;
        }
        return (
            //渲染界面
            <div>
                {title}
                <h1>react{name}</h1>
                <p>{formatName(user)}</p>
                {greet}
                <ul>{arr}</ul>
                <img src={logo} style={{width:100}} className={style.img} alt=""/>
            </div>
        )
    }
}
