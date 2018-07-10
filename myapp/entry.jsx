import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'


import ErrorBoundary from './ErrorBoundary.jsx'
import App from './App.jsx'



import './main.scss'

ReactDOM.render(
	<ErrorBoundary>
		<Router>
			<Route path='/' component={App}></Route>
		</Router>
	</ErrorBoundary>,
	document.getElementById('root')
)
