import axios from 'axios';
//实际上，这个请求会写在项目根目录的service中，不会写在models里
function getGoods(){
    return axios.get('/api/goods');
}
export default {
    namespace:'goods',
    // state:[{title:'web全栈'}],
    state:[],
    effects:{
        //generate函数要加*  异步的
        *getList(action,{call,put}){
            const res = yield call(getGoods);//用call调接口
            yield put({type:'init',payload:res.data.result})
        }
    },//副作用
    reducers:{
        init(state,action){
            return action.payload;
        },
        addGood(state,action){
           return [...state,{title:action.payload}]
        }
    }//状态变更
}