import React from 'react';
import styles from './login.css';
import {Login} from 'ant-design-pro';
import {connect} from 'dva';
const {UserName,Password,Submit} = Login;//通用用户名、密码提交组件 
// export default () => {
//   return (
//     <div>
//       <h1 className={styles.title}>Page login</h1>
//     </div>
//   );
// }

//做登录界面
// export default function(props){
//   // let from = props.location.state.from || '/';//重定向地址
//   const onSubmit = (err,values) => {
//     console.log(err,values);
//   };
//   return (
//     <div className={styles.loginForm}>
//         {/* logo */}
//         <img className={styles.logo} src="https://img.kaikeba.com/logo-new.png" />
//         {/* 登录表单 */}
//         <Login onSubmit={onSubmit}>
//             <UserName
//               name="username"
//               placeholder="kaikeba"
//               rules={[{required:true,message:"请输入用户名"}]}
//             />
//             <Password 
//               name="password"
//               placeholder="123"
//               rules={[{required:true,message:"请输入密码"}]}
//             />
//             <Submit>登录</Submit>
//         </Login>
//     </div>
//   )
// }

// 做登录校验
export default connect()(function(props){
  // let from = props.location.state.from || '/';//重定向地址
  const onSubmit = (err,values) => {
    console.log(err,values);
    props.dispatch({type:'user/login',payload:values})
  };
  return (
    <div className={styles.loginForm}>
        {/* logo */}
        <img className={styles.logo} src="https://img.kaikeba.com/logo-new.png" />
        {/* 登录表单 */}
        <Login onSubmit={onSubmit}>
            <UserName
              name="username"
              placeholder="kaikeba"
              rules={[{required:true,message:"请输入用户名"}]}
            />
            <Password 
              name="password"
              placeholder="123"
              rules={[{required:true,message:"请输入密码"}]}
            />
            <Submit>登录</Submit>
        </Login>
    </div>
  )
})