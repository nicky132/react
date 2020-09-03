//导出user的reducer
export const user = (
    state = {isLogin:false,loading:false,error:""},
    action
) => {
    switch (action.type){
        case "requestLogin":
            return {isLogin:false,loading:true,error:""};
        case "loginSuccess":
            return {isLogin:true,loading:false,error:""};
        case "loginFailure":
            return {isLogin:false,loading:false,error:action.message};
        default:
            return state;
    }
};
//派发动作依然是对象而不是函数
export function login(uname){
    return {type:"login",uname};
}