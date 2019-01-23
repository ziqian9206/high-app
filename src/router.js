import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './page/Home'
import User from './page/User'
import Car from './page/Car'
import Category from './page/Category'

export default ()=>(
    <BrowserRouter>
        <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/category' component={Category}></Route>
            <Route path='/car' component={Car}></Route>
            <Route path='/user' component={User}></Route>
        </Switch>
    </BrowserRouter>
)