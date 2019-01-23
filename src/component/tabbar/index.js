import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.css'
const tarArr = [{
  img:"icon-CombinedShape",
  text:"首页",
  path:'/home'
},{
  img:"icon-fenlei",
  text:"分类",
  path:'/category'
},{
  img:"icon-gouwuche",
  text:"购物车",
  path:'/car'
},{
  img:"icon-yonghu",
  text:"我的",
  path:'/user'
}]

const tabbar = (WrappedComponent)=> class Tabbar extends Component {
    state={
      index:0
    }
    handleChange=(i)=>{
      this.setState({
        index:i
      })
    }
    render() {
      const url =window.location.href
      console.log(url)
      return (
        <div>
          <div> <WrappedComponent /></div>
          <div className ='tabbar'>
            <div className='tabbar-content'>
            {
                tarArr.map((item,index)=>(
                  <Link className={'tabbar-item '+(url.indexOf(item.path)>-1?'active':'')} key={index} to={item.path} onClick={()=>this.handleChange(index)}>
                    <div className={'iconfont '+item.img}></div>
                    <p>{item.text}</p>
                  </Link>
                ))
              }
            </div>  
          </div>
        </div>
      )
    }
  }

export default tabbar