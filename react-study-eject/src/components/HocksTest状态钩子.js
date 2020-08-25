//状态钩子
import React ,{useState} from 'react'

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
    //输入内容状态，以及设置内容方法
    const [pname,setPname] = useState("");
    const onAddFruit = e =>{
        if(e.key === 'Enter'){
            props.onAddFruit(pname);
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

export default function HocksTest() {
    //useState(initialState) 接收初始状态，返回一个由状态和其更新函数组成的数组
    const [fruit,setFruit] = useState("");
    const [fruits,setFruits] = useState(['香蕉','草莓','芒果'])
    return (
        <div>
            < FruitAdd onAddFruit={pname => setFruits([...fruits,pname])} />
            <p>{fruit === ""?"请选择喜爱的水果：":`您选择的是：${fruit}`}</p>
            {/* 列表 */}
            <FruitList fruits={fruits} onSetFruit={setFruit}></FruitList>
        </div>
    )
}
