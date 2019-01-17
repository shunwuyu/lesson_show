import React from 'react'
import { Menu, Dropdown, notification } from 'antd';
import {Link} from 'react-router-dom'
import Style from './index.scss'
console.log(Style);
class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state = {
        toggle: true,
        focusStatus: false,
        search: ''
    }
  }

  signOut () {

  }

  render () {
    const aboutMenu = (
      <Menu>
          <Menu.Item>关于我</Menu.Item>
          <Menu.Item onClick={this.signOut.bind(this)}>退出登录</Menu.Item>
      </Menu>
    );

    return (
      <nav className={Style['page-header']}>
        <div ref="header" className={`${Style['header']} ${Style['toggle']}`}>
          <div className={Style['navigate']}>
            <Dropdown overlay={aboutMenu} >
                <Link to={'/about'} className={Style['user']}/>
            </Dropdown>
          </div>
        </div>
      </nav>
    )

  }
}

export default Nav;