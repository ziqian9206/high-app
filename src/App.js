// import React, { Component } from 'react';

// import A from './components/a'
// import B from './components/b'
// import C from './components/c'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <A />
//         <B />
//         <C name={'wzqc'} age ={19} />
//       </div>
//     )
//   }
// }
import React, { Component } from 'react'
import Tabbar from './component/tabbar'
import './static/iconfont.css'
import RouteMap from './router'
export default class App extends Component {
  render() {
    return (
      <div>
        <RouteMap />
      </div>
    )
  }
}
