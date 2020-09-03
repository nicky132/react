/*
* title: 用户中心
* Routes:
*   - ./routes/PrivateRoute.js
*/
//上面的注释复合yaml语法
import Redirct from 'umi/redirect';

export default function PrivateRoute(props) {
    //判断用户登录状态
    if(new Date().getDay() % 2 === 1){
        return (
            <Redirct
              to={{
                  pathname:"/login",
                  state:{redirct:props.location.pathname}
              }}
            />
        );
    }
    return (
        <div>
            PrivateRoute
            {props.children}
        </div>
    );
}
