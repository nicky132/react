//因为login页面要用副作用，就要在model里创建一个js，然后login页面connect过来给login页面调用就行

import axios from "axios";
import router from "umi/router";

//初始状态，本地缓存或空值对象
const userinfo = JSON.parse(localStorage.getItem("userinfo")) || {
    token:"",
    role:"",
    username:"",
    balance:0
}

//登录请求方法
function login(payload){
   return axios.post("/api/login",payload);
}
export default{
    namespace:'user',
    state:userinfo,
    effects:{
        *login({payload},{call,put}){
            try{
                const {data:{code,data:userinfo}} = yield call(login,payload);//call调用就设计到有可能会有异常，就用try catch包一下
                //登录成功：缓存用户信息
                localStorage.setItem("userinfo",JSON.stringify(userinfo));
                yield put({type:"init",payload:userinfo});
                router.push("/");
            }catch(error){
                //登录失败，弹出提示信息，可以通过响应拦截器实现
            }
        }
    },
    reducers:{
        init(state,action){
            return action.payload;
        }
    }
}