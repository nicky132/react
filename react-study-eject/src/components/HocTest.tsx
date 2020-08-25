import React from 'react'

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
// const LessonWithContent = withLog(withContent(lesson));

//lesson保证功能单一，它不关心数据来源，只负责显示
//JSX装饰器语法 @withLog
@withLog
@withContent
class Lesson2 extends React.Component{
    render(props){
        return(
            <div>
                {props.stage} - {props.title}
            </div>
        );
    }
}

export default function HocTest() {
    return (
        <div>
            {[0,0,0].map((item,idx)=>(
               <Lesson2 key={idx} idx={idx}/>
              )
            )}
        </div>
    )
}
