import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { sidebarData, groupKey } from './SidebarData';
const { Sider } = Layout;
const { SubMenu , Item } = Menu;
class Sidebar extends Component {
  state = {
    openKeys: [''],
    selectedKeys: [''],
    rootSubmenuKeys: groupKey,
    itemName: ''
  }
  OpenChange = (openKeys) => {
    console.log(openKeys);
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    console.log(latestOpenKey);
    if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({openKeys})
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [...openKeys]
      })
    }
  }
  componentDidMount = () => {
    // console.log(this.props);
    this.setDefaultActiveItem(this.props);
  }
  setDefaultActiveItem = ({ location }) => {
    // console.log(location);
    const { pathname } = location;
    sidebarData.map(item => {
      if (item.pathname) {}
      if (item.children && item.children.length > 0) {
        item.children.map(childitem => {
          if (pathname.match(childitem.path)) {
            this.setState({
              openKeys: [item.key],
              selectedKeys: [childitem.key]
            });
            document.title = childitem.text
          }
        })
      }
    })
  }
  render () {
    const { openKeys, selectedKeys } = this.state;
    const SideTree = sidebarData.map(item => (
      <SubMenu
        key={item.key}
        title={
          <span>
            <Icon type={item.title.icon} />
            <span>{item.title.text}</span>
          </span>
        }
        >
        {
          item.children && item.children.map(menuItem => (
            <Item
              key={menuItem.key}
              onClick={() => {
                this.setState({ selectedKeys: [menuItem.key] });
                                // 设置文档标题
                                document.title = menuItem.text;
              }}  
            >
              <Link to={menuItem.path}>{menuItem.text}</Link>
            </Item>
          ))
        }
      </SubMenu>
    ))
    return (
      <Sider
        collapsible
        breakpoint="lg">
        <Menu
          subMenuOpenDelay={0.3}
          theme="dark"
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          mode="inline"
          onOpenChange={this.OpenChange}>
          {SideTree}
        </Menu>
      </Sider>
    )
  }
}

export default withRouter(Sidebar);