//手敲react-router实现方案
import React,{Component} from 'react';
import {createBrowserHistory} from 'history';
//matchPath.js
import pathToRegexp from "path-to-regexp";
const cache= {};
const cacheLimit = 10000;
let cacheCount = 0;

//detail/web <=> /detail/:name
function compilePath(path,options){
   const cacheKey = `${options.end}${options.strict}${options.sensitive}`;
   const pathCache = cache[cacheKey] || (cache[cacheKey] = {});

   if(pathCache[path]) return pathCache[path];
   
   const keys = [];
   const regexp = pathToRegexp(path,keys,options);
   const result = {regexp,keys};

   if(cacheCount < cacheLimit){
      pathCache[path] = result;
      cacheCount++;
   }
   return result;
}
/**
 * Public API for matching a URL pathname to a path
 */
function matchPath(pathname,options={}){
    if(typeof options === "string") options = {path:options};

    const {path,exact = false,strict = false,sensitive = false} = options;
    const paths = [].concat(path);
    return paths.reduce((matched,path)=>{
        if(!path) return null;
        if(matched) return matched;
        
        const {regexp,keys} = compilePath(path,{
            end:exact,
            strict,
            sensitive
        });
        const match = regexp.exec(pathname);
        if(!match) return null;

        const [url,...values] = match;
        const isExact = pathname === url;
        if(exact && !isExact) return null;

        return{
            path,
            url:path === "/" && url === ""?"/":url,//the matched portion of the URL
            isExact,
            params:keys.reduce((memo,key,index) =>{
                memo[key.name] = values[index];
                return memo;
            },{})
        };
    },null);
}


//创建一个上下文保存history、localtion等
const RouterContext = React.createContext();
//Router:管理历史记录变更，location变更等等，并传递给后代
class BrowserRouter extends Component{
    constructor(props){
        super(props);
        //创建浏览器history对象
        this.history = createBrowserHistory(this.props);
        //创建一个状态管理location
        this.state = {
            location:this.history.location
        };
        //开启监听
        this.onlisten = this.history.listen(location => {
            this.setState({location})
        });
    }
    //将要卸载的时候onlisten解绑掉
    componentWillUnmount(){
        if(this.onlisten){
           this.onlisten();
        }
    }
    render(){
        return (
            <RouterContext.Provider //先向后代提供数据
                value={{
                    history:this.history,
                    location:this.state.location
                }}
                children={this.props.children}
            />
        );
    }
}

class Route extends Component{
    render(){
        return(
            <RouterContext.Consumer //父亲提供方案，后代再消费父亲的方案
                > 
                {
                    context=>{
                        const location = context.location;
                        //根据pathname和用户传递的props获取match对象
                        const match = matchPath(location.pathname,this.props);
                        const props = {...context,match};
                        //children component render ；children后代匹不匹配都要更新，component匹配后才更新
                        let {children,component,render} = this.props;
                        if(typeof children === 'function'){
                            children = children(props);
                        }
                        return(
                            <RouterContext.Provider value={props}>
                                { //children优先级最高，component次之，render最后
                                    children
                                        ?children
                                        :props.match //后面的component和render必须匹配
                                        ?component //若匹配首先查找component
                                            ?React.createElement(component) //若他存在渲染之
                                            :render //若render存在
                                            ?render(props) //按render渲染结果
                                            :null
                                        :null
                                }
                            </RouterContext.Provider>
                        )
                    }
                }
            </RouterContext.Consumer>
        )
    }
}

//链接跳转，处理点击事件
class Link extends React.Component{
    handleClick(event,history){
        event.preventDefault();
        history.push(this.props.to);
    }
    render(){
        const {to,...rest} = this.props;
        return (
            <RouterContext.Consumer>
                {
                    context =>{
                        return(
                            <a
                              {...rest}
                              onClick = {event => this.handleClick(event,context.history)}
                              href = {to}
                            >
                               {this.props.children}
                            </a>
                        );
                    }
                }
            </RouterContext.Consumer>
        );
    }
}

export default class MyRouteTest extends Component {
    render(){
        return <BrowserRouter>
            <Link to="/foo">foo</Link>
            <Link to="/bar">bar</Link>
            <Link to="/mua/nvshen">mua</Link>
            <Route path="/foo" component={()=><div>foo</div>}></Route>
            <Route path="/bar" component={()=><div>bar</div>}></Route>
            <Route path="/mua/:ns" render={({match})=>match.params.ns}></Route>
            <Route children={props=>'children属性'}></Route>
        </BrowserRouter>
    }
}
