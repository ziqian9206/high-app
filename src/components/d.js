import React, { Component } from 'react'
//1.普通组件2包裹3.传入普通组件参数4.高阶组件必须大写
function d(WrappedComponent){
  return class D extends Component {
    refc=(instance)=>{
      //instance获得子组件，先判断子组件是否有这种方法。
      instance.getName&&console.log(instance.getName())
      console.log('instance',instance)
    }
    state={
      value:''
    }
    handleChange=(e)=>{
      this.setState({
          value:e.target.value
      })
    }
    render() {
      const newProps = {
        value:this.state.value,
        onChange:this.handleChange
      }
      console.log(this.props)
      const {age,...otherprops} = this.props
      return (
        <div>
          <h1>高阶组件</h1>
          <WrappedComponent {...otherprops} sex={'男'} {...newProps} ref={this.refc}/>
        </div>
      )
    }
  }  
}

export default d
//export default (title)=>WrappedComponent => class A extends Component{}
//{(key)=>this.handle(key)}
//this.handle=()=>{}   {this.handle}