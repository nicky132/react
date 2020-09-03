//手敲一个redux
export function createStore(reducer,enhancer){
    //如果存在enhancer
    if(enhancer){
       return enhancer(createStore)(reducer)
       //enhancer作用，除了createStore之外，还要执行reducer
    }
    let currentState = undefined;
    const currentListeners = [];
    function getState(){
        return currentState;
    } 
    //更新状态
    function dispatch(action){
        //修改
        currentState = reducer(currentState,action);
        //变更通知
        currentListeners.forEach(v=>v());
        return action;
    }
    function subscribe(cb){//订阅才更新，没有订阅不更新
        currentListeners.push(cb);
    }
    //初始化状态
    dispatch({type:'@IMOOC/KKB-REDUX'})
    return {
        getState,dispatch,subscribe
    }
}
//中间件：applyMiddleware就是执行完中间件之后还要执行其他的逻辑

export function applyMiddleware(...middlewares){
    return createStore => (...args) => {
        const store = createStore(...args);
        let dispatch = store.dispatch;
        const midApi = {
            getState:store.getState,
            dispatch:(...args) => dispatch(...args)
        }
        const chain =  middlewares.map(mv => mv(midApi))    //中间件函数链
        //强化dispatch，让他可以按照顺序执行中间件函数
        dispatch = compose(...chain)(store.dispatch);//聚合成超级dispatch
        return {
            ...store,
            dispatch
        }//这样强化后，就不是之前一般的dispatch，而是可以执行中间件的dispatch
    }
}

export function compose(...funcs){ //洋葱模型，有点像koa
    if(funcs.length === 0){
       return arg => arg;
    }
    if(funcs.length === 1){
       return funcs[0];
    }
    //聚合函数数字为一个函数[fn1,fn2]
    //left,right为左边右边的函数
    return funcs.reduce((left,right)=>(...args)=>right(left(...args)));
}

