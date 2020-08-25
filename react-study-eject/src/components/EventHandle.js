//用户事件处理
import React, { Component } from 'react'

export default class EventHandle extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:''
        };
        //this指向问题解决方式1
        // this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            name:e.target.value
        })
    }
    render(){
        return (
            <div>
                <input 
                type="text" 
                value={this.state.name} 
                //this指向问题解决方式1
                // onChange={this.handleChange}
                //this指向问题解决方式2
                onChange={e=>this.handleChange(e)}
                />
            </div>
        )
    }
}
