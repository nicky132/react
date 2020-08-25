import React from 'react'

//lesson保证功能单一，它不关心数据来源，只负责显示
function lesson(props){
    return(
        <div>
            {props.stage} - {props.title}
        </div>
    );
}

//假数据
const lessons = [
    {stage:"React1",title:"组件化1"},
    {stage:"React2",title:"组件化2"},
    {stage:"React3",title:"组件化3"}
]

const withContent = Comp => props =>{
    const content = lessons[props.idx];
    return <Comp {...content} />;
}

//withLog高阶组件，能够在组件挂载时输出日志
const withLog = Comp =>{
    return class extends React.Component{
        componentDidMount(){
            console.log('didMount',this.props);
        }
        render(){
            return <Comp {...this.props} />
        }
    }
}
//包装
const LessonWithContent = withLog(withContent(lesson));

export default function HocTest() {
    return (
        <div>
            {[0,0,0].map((item,idx)=>(<LessonWithContent key={idx} idx={idx}/>)
            )}
        </div>
    )
}
