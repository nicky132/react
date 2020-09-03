// export default function (props) {
//     return (
//         <div>
//             404 Not Found!
//         </div>
//     )
// }

// 用ant-design业务组件Exception后修改成下面
import {Exception} from 'ant-design-pro'
export default function(){
    return (
        <Exception type="404" backText="返回首页"></Exception>
    )
}