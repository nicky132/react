export default function(props) {
    if(props.location.pathname ==='/404' || props.location.pathname === '/login'){
       return <div>{props.children}</div>
    }
    //如果路由是404或者login，什么都不渲染
    return (
      <div>
        <h1>布局页面</h1>
        <div>{props.children}</div>
      </div>
    );
  }