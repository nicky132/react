//使用antd npm install antd --save
//依赖按需加载  npm install react-app-rewired customize-cra babel-plugin-import -d

//然后把脚本修改一下
// "scripts": {
//     "start": "node scripts/start.js",
//     "build": "node scripts/build.js",
//     "test": "node scripts/test.js"
//   },
//改成
// "scripts": {
//     "start": "react-app-rewired start",
//     "build": "react-app-rewired build",
//     "test": "react-app-rewired test"
//   },

import React from 'react'
// import JsxText from './components/JsxText';

//用一下这个有状态组件
// import StateMgt from './components/StateMgt'
// import EventHandle from './components/EventHandle'
// import ContentText from './components/ContentText'
// import HocTest from './components/HocTest'
// import Composition from './components/Composition'
// import HocksTest from './components/HocksTest'
// import Button from 'antd/lib/button'
import "antd/dist/antd.css"
import ReduxTest from './components/ReduxTest'
import RouterTest from './components/RouterTest'
import MyRouteTest from './components/MyRouteTest'
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
            {/* <h1>{props.title}</h1> */}
            {/* <JsxText /> */}
            {/* <StateMgt />
            <EventHandle />
            <ContentText />
            <HocTest />
            <Composition /> */}
            {/* <HocksTest /> */}
            {/* <Button>333</Button> */}
            <ReduxTest/>
            <RouterTest/>
            <MyRouteTest/>
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