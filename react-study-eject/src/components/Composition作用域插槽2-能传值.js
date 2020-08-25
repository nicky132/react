import React from 'react'

//Dialog定义组件外观和行为
function Dialog(props){
    console.log(props.children);
    const messages = {
        foo:{title:"foo",content:"foo-"},
        bar:{title:"bar",content:"bar-"},
    };
    //拿到父带参的方法解构出来
    const {def,footer} = props.children(messages[props.msg]);

   return (
    <div style={{border:"1px solid blue"}}>
        {def}
        <div>{footer}</div>
    </div>
   )
}

export default function Composition() {
    return (
        <div>
            <Dialog msg="foo">
                {/* 既然是jsx语法用在这里，这里也可以是函数 */}
                { ({title,content})=>(
                     {
                            def:(
                                <div>
                                    <h1>{title}</h1>
                                    <p>{content}</p>
                                </div>
                            ),
                            footer:<button onClick={()=>alert('nihao')}>确定</button>
                        }
                    )
                }
            </Dialog>
        </div>
    )
}
