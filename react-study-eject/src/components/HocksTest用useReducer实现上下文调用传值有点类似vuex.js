// https://github.com/streamich/react-use这个库很好，很多手机端的东西可以直接拿来用，地图啥的
//状态钩子
import React ,{useState, useEffect,useReducer,useContext} from 'react'

//仅展示水果列表
function FruitList({fruits,onSetFruit}){
   return(
       <ul>
           {fruits.map(f => <li key={f} onClick={()=>onSetFruit(f)}>{f}</li>)}
       </ul>
   )
}

//声明输入组件
function FruitAdd(props){
    //使用useContent获取上下文
    const {dispatch} =  useContext(Context)
    //输入内容状态，以及设置内容方法
    const [pname,setPname] = useState("");
    const onAddFruit = e =>{
        if(e.key === 'Enter'){
            // props.onAddFruit(pname);
            //不要再依赖与老爹，实现解耦,另外一种写法
            dispatch({type:"add",payload:pname});
            setPname("");
        }
    };
    return (
        <div>
            <input 
            type="text"
            value={pname}
            onChange={e => setPname(e.target.value)}
            onKeyDown = {onAddFruit}
            />
        </div>
    )
}


//添加fruit状态维护fruitReducer
function fruitReducer(state,action){
    switch(action.type){
        case "init":
           return action.payload;
        case "add":
            return [...state,action.payload];
        default:
            return state;
    }
}

//创建上下文
const Context = React.createContext();

export default function HocksTest() {
    //useState(initialState) 接收初始状态，返回一个由状态和其更新函数组成的数组
    const [fruit,setFruit] = useState("");
    // const [fruits,setFruits] = useState(['香蕉','草莓','芒果'])
    const [fruits,dispatch] = useReducer(fruitReducer, []);

    //异步获取水果列表
    useEffect(()=>{
        console.log("useEffect");//表示只执行一次
        const timer = setTimeout(()=>{
            dispatch({type:"init",payload:["香蕉","西瓜"]})
            // setFruits(['香蕉','西瓜']);
        },1000);
        return function(){
            clearTimeout(timer);
        }
    },[]);//依赖为空，表示只执行一次

    // useEffect(()=>{
    //     console.log("useEffect");//这里每次属性改变都要执行，有点像vue的watch
    //     setTimeout(()=>{
    //         setFruits(['香蕉','西瓜']);
    //     },1000);
    //  },[fruit]);//依赖不为空，表示执行很多次

    useEffect(()=>{
        document.title = fruit;
    },[fruit]);

    return (
        <Context.Provider value={{fruits,dispatch}}>
            <div>
                {/* < FruitAdd onAddFruit={pname => setFruits([...fruits,pname])} /> */}
                < FruitAdd onAddFruit={pname => dispatch({type:"add",payload:pname})} />
                <p>{fruit === ""?"请选择喜爱的水果：":`您选择的是：${fruit}`}</p>
                {/* 列表 */}
                <FruitList fruits={fruits} onSetFruit={setFruit}></FruitList>
            </div>
        </Context.Provider>
    )
}
