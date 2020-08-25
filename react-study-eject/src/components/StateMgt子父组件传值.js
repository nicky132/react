import React, { Component, useState,useEffect } from 'react'

//函数组件状态管理:useState,useEffect
//hooks只能在16.8.x以后使用
function ClockFunc(){
    //创建状态
    const [date, setDate] = useState(new Date());
    //定时器是副作用，需要用到useEffect
    useEffect(() => {
        const timeId = setInterval(()=>{
            //通过setSate更新状态
            setDate(new Date());
        },1000);
        return ()=>{
            clearInterval(timeId);
        };
    },[])
    return(
        <div>{date.toLocaleTimeString()}</div>
    )
}

class Clock extends Component{
    constructor(props){
       super(props);
       //初始化状态
       this.state = {
           date:new Date(),
           counter:0
       }
    }
    //不用componentDidMount方法返回的是静态数据，用了里面setstate就能更改到了数据，有状态组件
    componentDidMount(){
        // //假如counter初始化为0，执行三次后其结果是多少
        // //1
        // //同一个key多次出现，那么最后一个设置属性起作用
        // this.setState({counter:this.state.counter +1});//1
        // this.setState({counter:this.state.counter +1});//2
        // this.setState({counter:this.state.counter +1});//3
        // //最后一个起作用，setSate异步的,而且是0
        // console.log(this.state.counter);

        // //***********
        // //2
        // //那么如果想立刻看到值，得在回调函数里写逻辑,异步执行取最后一个值
        // this.setState({counter:this.state.counter +1},()=>{
        //     console.log("fn()",this.state.counter);
        // });//1
        // this.setState({counter:this.state.counter +1},()=>{
        //     console.log("fn()",this.state.counter);
        // });//2
        // this.setState({counter:this.state.counter +1},()=>{
        //     console.log("fn()",this.state.counter);
        // });//3

        // //3
        // //回调函数方式产生数据更新另外一种方法
        // this.setState(state=>({counter:state.counter + 1}),()=>{
        //     console.log("fn()",this.state.counter);
        // });//1
        // console.log("fn()..",this.state.counter);
        // this.setState(state=>({counter:state.counter + 1}),()=>{
        //     console.log("fn()",this.state.counter);
        // });//2
        // console.log("fn()..",this.state.counter);
        // this.setState(state=>({counter:state.counter + 1}),()=>{
        //     console.log("fn()",this.state.counter);
        // });//3
        // console.log("fn()..",this.state.counter);

        //4
        //打印123
        this.setState(state=>{
            console.log("counter",state.counter);
            return {counter:state.counter + 1};
        },()=>{
            console.log("fn()",this.state.counter);
        });//1
        console.log("fn()..",this.state.counter);
        this.setState(state=>{
            console.log("counter",state.counter);
            return {counter:state.counter + 1};
        },()=>{
            console.log("fn()",this.state.counter);
        });//2
        console.log("fn()..",this.state.counter);
        this.setState(state=>{
            console.log("counter",state.counter);
            return {counter:state.counter + 1};
        },()=>{
            console.log("fn()",this.state.counter);
        });//3
        console.log("fn()..",this.state.counter);

        //定时器
        this.timeId = setInterval(()=>{
            //通过setState更改状态
            this.setState(
                {
                    date:new Date()
                },
                ()=>{
                    //每次状态更新就通知父组件
                    this.props.change(this.state.date);
                }
            )
        },100)
    }
    componentWillUnmount(){
        clearInterval(this.timeId);
    }
    render(){
        return <div>{this.state.date.toLocaleTimeString()}</div>
    }
}
export default function StateMgt() {
    return (
        <div>
            <Clock change={(date)=>console.log(date.toLocaleTimeString())}/>
            <ClockFunc />
        </div>
    )
}
