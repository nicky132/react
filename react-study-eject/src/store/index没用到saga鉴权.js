import {createStore ,applyMiddleware,combineReducers} from 'redux';
//combineReducers 把若干redux整合在一起
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {counterReducer} from './counter';
//如果此时传入的值是个对象，就不应该用state = {counter:0},那么对应的ReduxTest中 state => ({num:state.counter}),
//代码优化到counter中
// const counterReducer = function(state = 0,action){
//     const num = action.payload || 1;
//     switch(action.type){
//         case 'add':
//             // break;
//             return state + num;
//         case 'minus':
//             // break;
//             return state - num;
//         default:
//             return state;
//     }
// }
const store = createStore(
    // 若干redux整合在一起
    combineReducers({counter:counterReducer}),
    applyMiddleware(logger,thunk) //redux不像vuex那样支持异步操作，因为引入logger起到这样作用，引入thunk解决了处理函数行acton能力
);
export default store;

