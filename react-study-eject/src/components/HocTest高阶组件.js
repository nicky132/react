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

//定义高阶组件widthContent
//包装后的组件传入参数，根据改参数获取显示数据
const withContent = Comp => props =>{
    const content = lessons[props.idx];
    return <Comp {...content} />;
}
//包装
const LessonWithContent = withContent(lesson);

export default function HocTest() {
    return (
        <div>
            {[0,0,0].map((item,idx)=>(<LessonWithContent key={idx} idx={idx}/>)
            )}
        </div>
    )
}
