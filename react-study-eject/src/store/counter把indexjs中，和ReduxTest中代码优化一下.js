//优化代码
export const add = (num)=>({type:"add",payload:num});
export const minus = ()=>({type:"minus"});
export const asyncAdd = ()=>dispatch =>{
    //异步调用在这里
    setTimeout(()=>{
        dispatch({type:'add',payload:1})
    },1000);
}

export const counterReducer = function(state = 0,action){
    const num = action.payload || 1;
    switch(action.type){
        case 'add':
            // break;
            return state + num;
        case 'minus':
            // break;
            return state - num;
        default:
            return state;
    }
}