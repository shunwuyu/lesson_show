import React from 'react';
import { Menu, Dropdown, notification } from 'antd';
import { Link } from 'react-router-dom';
import Style from './index.scss'
console.log(Style);
class Nav extends React.Component {
  render () {
    const aboutMenu = (
      <Menu>
        <Menu.Item>关于我</Menu.Item>
        <Menu.Item>退出登录</Menu.Item>
      </Menu>
    );
    return (
      <nav className={Style['page-header']}>
        <div className={`${Style['header']} ${Style['toggle']}`}>
          <div className={Style['navigate']}>
            <Dropdown overlay={aboutMenu}>
              <a className={Style['user']}></a>
            </Dropdown>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav;