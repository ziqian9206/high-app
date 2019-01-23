import React,{Component} from 'react'
import D from './d'
@D
class A extends Component{
    state={
        value:''
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <p>AAAA</p>
                <input type='text' {...this.props}/>
            </div>
        )
    }
}

export default A