import React,{ Component } from 'react'
// import store from '../store';
import {connect} from 'react-redux';

//1、一种实现方式
// @connect(state =>({num:state})) //用了这个装饰器，会自动刷新
// class ReduxTest extends Component {
//     render(){
//         return (
//             <div>
//                 {/* {store.getState()} */}
//                 {/* 用了Redux就不用store这个了 */}
//                 {this.props.num}
//                 <div>
//                     <button onClick={()=>this.props.dispatch({type:'add'})}></button>
//                     <button onClick={()=>this.props.dispatch({type:'minus'})}></button>
//                 </div>
//             </div>
//         )
//     }
// }

//2、二种实现方式
//函数签名,传入啥值返回啥值
//参数1:mapStateToProps = (state) => {return {num:state}}
//参数2:mapDispatchToProps = dispatch => {return {add:()=>dispatch({type:'add'})}}
//如果store中传入的值是个对象，就用state = {counter:0},那么对应的ReduxTest中 state => ({num:state.counter}),
@connect(
    state => ({num:state}),
    {// 理解为vuex中的action
        add:(num)=>({type:"add",payload:num}),
        minus:()=>({type:"minus"}),
        asyncAdd:()=>dispatch =>{
            //异步调用在这里
            setTimeout(()=>{
                dispatch({type:'add',payload:1})
            },1000);
        }
    }
) //用了这个装饰器，会自动刷新
class ReduxTest extends Component {
    render(){
        return (
            <div>
                {/* {store.getState()} */}
                {/* 用了Redux就不用store这个了 */}
                {this.props.num}
                <div>
                    {/* 试图给传参数进去 */}
                    <button onClick={()=>this.props.add(2)}></button>
                    <button onClick={this.props.minus}></button>
                    {/* 利用中间件解决redux异步的问题 */}
                    <button onClick={this.props.asyncAdd}></button>
                </div>
            </div>
        )
    }
}

export default ReduxTest
