import {call,put,takeEvery} from "redux-saga/effects";

const UserService = {
    login(uname){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(uname === "Jerry"){
                    resolve({id:1,name:"Jerry",age:18});
                }else{
                    reject("用户名或密码错误");
                }
            },1000);
        });
    }
};

// worker saga 干活
//底层使用的是generate生成器函数，同步的方式写异步的代码 通常配合yield使用
function* login(action){
    try{
        yield put({type:"requestLogin"});
        //调用异步登陆请求
        const result = yield call(UserService.login,action.uname);
        yield put({type:"loginSuccess",result});
    }catch(message){
        yield put({type:"loginFailure",payload:message});
    }
}
// watcher saga 监听
function* mySaga(){
    yield takeEvery("login",login);
}

export default mySaga;