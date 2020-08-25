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