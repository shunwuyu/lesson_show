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

  focusSearchInput () {
    this.setState({'focusStatus': !this.state.focusStatus})
  }

  handelChange (event){
      this.setState({search: event.target.value})
  }

  focusSearchInput () {
    this.setState({'focusStatus': !this.state.focusStatus})
  }

  searchContent  = (event) =>  {
    if (event.key === 'Enter') {
      console.log('搜索');
      let search = this.state.search
    }
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
          <div className={Style['logo-space']}>
              {
                  this.state.toggle?
                  <Link  className={Style['instagram']} to={'/'} />
                  :
                  <Link  className={Style['icon']} to={'/'} />
              }
          </div>
          <div className={Style['search']}>
          {
            this.state.focusStatus?
            <div className={Style['search-content']}>
                <input 
                    className={Style['search-input']} 
                    type="text" 
                    onKeyPress={this.searchContent}
                    autoFocus={this.state.focusStatus}
                    onChange={this.handelChange.bind(this)} 
                    onBlur={this.focusSearchInput.bind(this)}
                    placeholder="搜索"/>
                <span className={Style['icon']}></span>
            </div>
            :
            <div className={Style['search-block']} onClick={this.focusSearchInput.bind(this)}>
              <span className={Style['block-icon']}></span>
              <span className={Style['block-text']}>搜索</span>
            </div>
          }
          </div>  
          <div className={Style['navigate']}>
            <Link  className={Style['explore']} to={'/'} />
            <Link  className={Style['love']} to={'/'} />
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