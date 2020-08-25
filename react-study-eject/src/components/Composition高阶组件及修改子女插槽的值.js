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


function RadioGroup(props){
    return(
        <div>
            {React.Children.map(props.children,radio=>{
                //要修改虚拟dom，只能克隆它
                //参数1是克隆对象
                //参数2是设置的属性
                return React.cloneElement(radio,{name:props.name})
            })}
        </div>
    )
}

function Radio({children,...abc}){
    return(
        <label>
            <input type="radio" {...abc} />
            {children}
        </label>
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
            <RadioGroup name="mvvm">
                <Radio value="vue">vue</Radio>
                <Radio value="react">react</Radio>
                <Radio value="angular">angular</Radio>
            </RadioGroup>
        </div>
    )
}
