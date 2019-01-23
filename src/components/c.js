import React,{Component} from 'react'
import D from './d'
class C extends Component{
    state={
        value:''
    }
    render(){
        return(
            <div>
                CCCC
                我的名字:{this.props.name}
                我的年龄:{this.props.age}
            </div>
        )
    }
}
export default D(C)