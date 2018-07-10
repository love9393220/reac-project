import React,{Component} from 'react'
import MainFooter from '@/components/MainFooter.jsx'
import FetchJsonp from 'fetch-jsonp'
import {Route, Switch, Redirect } from 'react-router-dom'

import Home from '@/components/Home.jsx'
import Kind from '@/components/Kind.jsx'
import Msg from '@/components/Msg.jsx'
import Cart from '@/components/Cart.jsx'
import User from '@/components/User.jsx'

class App extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return (
			<div className='container'>
				<Switch>
					<Route path = '/home' component = {Home}></Route>
					<Route path = '/kind' component = {Kind}></Route>
					<Route path = '/msg' component = {Msg}></Route>
					<Route path = '/cart' component = {Cart}></Route>
					<Route path = '/user' component = {User}></Route>
					<Redirect to={{pathname:'/home'}}/>
				</Switch>
				<MainFooter></MainFooter>
			</div>
		)
	}
}

export default App