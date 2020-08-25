# umi框架

## 应用约定目录结构
pages 页面
components 组件
layouts 布局
models 状态
config 配置
mock 数据模拟
test 测试

## umi是命令行工具不是脚手架工具
## 安装命令
安装 npm install umi -g
项目目录
md umi-app
cd umi-app
新建index页面、about页面
umi g page index
umi g page about
其服务看效果
umi dev
新加一个详情页面
umi g page users/'$id'
生成一个布局文件
umi g layout ./users/
生成users文件中的子页面
umi g page users/_layout

index.js里做点击传值
pages里做404页面

跟目录下写layouts生成布局页面

layouts中indexjs里做404、login导航卫士

用PrivateRoute做高阶组件，做路由守卫
路由login、404不同拦截效果
