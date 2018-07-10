import React,{Component} from 'react'
import {Link,NavLink} from 'react-router-dom'

class MainFooter extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<footer>
				<ul>
					<li>
						<NavLink to='/home'>
							<i className="iconfont icon-shouye"></i>
							<p>首页</p>
						</NavLink>
					</li>
					<li>
						<NavLink to={'/kind'}>
							<i className="iconfont icon-fenlei1"></i>
							<p>分类</p>
						</NavLink>
					</li>
					<li>
						<NavLink to={'/msg'}>
							<i className="iconfont icon-xiaoxi"></i>
							<p>消息</p>
						</NavLink>
					</li>
					<li>
						<NavLink to='/cart'>
							<i className="iconfont icon-gouwuche"></i>
							<p>购物车</p>
						</NavLink>
					</li>
					<li>
						<NavLink to='/user'>
							<i className="iconfont icon-my_icon"></i>
							<p>我的</p>
						</NavLink>
					</li>
				</ul>
			</footer>
		)
	}
}

export default MainFooter