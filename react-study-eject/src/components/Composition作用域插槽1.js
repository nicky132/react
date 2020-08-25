import React from 'react'

//Dialog定义组件外观和行为
function Dialog(props){
    console.log(props.children);
   return (
    <div style={{border:"1px solid blue"}}>
        {props.children.def}
        <div>{props.children.footer}</div>
    </div>
   )
}

export default function Composition() {
    return (
        <div>
            <Dialog children="foo">
                {
                    {
                        def:(
                            <div>
                                <h1>组件复合</h1>
                                <p>组件复合组件复合组件复合</p>
                            </div>
                        ),
                        footer:<button onClick={()=>alert('nihao')}>确定</button>
                    }
                }
            </Dialog>
        </div>
    )
}
