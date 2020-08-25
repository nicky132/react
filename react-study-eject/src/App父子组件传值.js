import React from 'react'
// import JsxText from './components/JsxText';

//用一下这个有状态组件
import StateMgt from './components/StateMgt'
import EventHandle from './components/EventHandle'
// export default function App() {
//     return (
//         <div>
//             <h1>{this.props.title}</h1>
//             <JsxText />
//         </div>
//     )
// }

//也可以写成下面一种形式(函数组件)
function App(props){
    return (
        <div>
            <h1>{props.title}</h1>
            {/* <JsxText /> */}
            <StateMgt />
            <EventHandle />
        </div>
    )
}
export default App
//也可以写成这样的形式，函数方式（没有状态，只展示）
// class App extends Component{
//     render(){
//         return(
//             <div>
                
//             </div>
//         )
//     }  
// }
// export default App