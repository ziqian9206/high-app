import React,{Component} from 'react'
import D from './d'
@D
class B extends Component{
    getName(){
        return 'bbbb'
    }
    state={
        value:''
    }
    render(){
        return(
            <div>BBBB</div>
        )
    }
}

export default B