import React from 'react';
import ReactDom from 'react-dom';
import logo from './old/logo.svg';
// import './index.css';//不是组件化css
import style from'./index.module.css';//组件化css

const name = 'React真帅....';
const user = { firstName: 'tom', lastName: 'jerry' };
const greet = <p>hello,nihao</p>;
const title = name?<h1>{name}</h1>:null;
// const arr = [1,2,3];
const arr = [1,2,3].map(num => <li key={num}>{num}</li>);
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
const jsx = (
    <div>
        {title}
        <h1>react{name}</h1>
        <p>{formatName(user)}</p>
        {greet}
        <ul>{arr}</ul>
        <img src={logo} style={{width:100}} className={style.img} alt=""/>
    </div>
);
console.log(jsx);
ReactDom.render(jsx, document.getElementById('root'));