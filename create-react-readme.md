# 创建以及获取源码
安装官方脚手架：npm install -g create-react-app
创建项目:create-react-app react-study
启动项目:npm start
查看项目真实面目:npm run eject,不然就全是封装过的项目，看不出啥东东
# 安装vscode 插件 react快捷生成代码块 
### 快速产生React component组件的扩展
ES7 React/Redux/GraphQL/React-Native snippets
#### 具体使用
rcc快捷方法 、rfc快捷方法（产生根组件(函数组件)）
rccc(写成class函数)
### 快速引入子组件的扩展
auto import

这个库很好，很多手机端的东西可以直接拿来用，地图啥的
https://github.com/streamich/react-use

### npm install redux --save 下载redux状态管理
### npm install react-redux --save 每次都重新调用render 和 getState太low了，想用react的方式来写，需要react-redux的支持
### Redux 
采用后，就不用在单个组件内部单个引入store，view试图更改后就不用再次单个渲染组件
并且，只要全局的地方注入provider的时候引入store，那么在单个组件的地方，使用装饰器就行
这个地方要使用两个api
1、Provider为后代组件提供store
2、connect为组件提供数据和变更方法

业界react开发框架
redux异步解决方案，管理副作用（dom操作、数据获取、浏览器缓存获取） redux-saga 是个中间件
数据流方案 dva
企业级框架umi 该框架把saga、dva都整合再一起了
