import React from 'react';
import Style from './index.scss';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
      focusStatus: false,
      search: ''
    }
  }
  render() {
    const aboutMenu = (
      <Menu>
        <Menu.Item>关于我</Menu.Item>
        <Menu.Item>退出登录</Menu.Item>
      </Menu>
    )
    return (
      <nav className={Style['page-header']}>
        <div ref="header" className={`header`}>
          <div className="logo-space">
            {
              this.state.toggle?
              <Link className="instagram" to={'/'}/>
              :
              <Link className="icon" to={'/'}/>
            }
          </div>
          <div className="search">
            {
              this.state.focusStatus?
              <div />
              :
              <div className="search-block">
                <span className="block-icon"></span>
                <span className="block-text">搜索</span>
              </div>
            }
          </div>
          <div className="navigate">
            <Link className="explore" to={'/'}/>
            <Link className="love" to={'/'}/>
            <Dropdown overlay={aboutMenu}>
              <Link className="user" to={'/about'}/>
            </Dropdown>
          </div>
        </div>
        
      </nav>
    )
  }
}

export default Nav;