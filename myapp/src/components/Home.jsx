import React,{Component} from 'react'

class Home extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return (
			<div className='container'>
				<div className='main'>
					<header className="home_header">
						<div className="home_hadLeft">
							<p>昌平区</p>
							<i className="iconfont icon-iconfonti2-copy-copy-copy-copy"></i>
						</div>
						<div className="home_hadRight">
							<i className="iconfont icon-sousuo2"></i>
							<input type="text" />
						</div>
					</header>
					
					<div className='content'>
						
					</div>
				</div>
			</div>
		)
	}
}

export default Home