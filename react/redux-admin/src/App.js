import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { Layout, notification, Icon } from 'antd';
import HeaderCustom from './components/HeaderCustom.jsx';
import { connect } from 'react-redux';
import Routes from './routes';
import SiderCustom from './components/SiderCustom';
const { Content, Footer } = Layout;


class App extends Component {
  state = {
    collapsed: false,
    title: ''
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
  _setTitle = ({ title }) => {
    if (this.state.title === title) return;
    this.setState({ title });
  }

  render() {
    const { title } = this.state;
    const { auth } = this.props;
    return (
      <DocumentTitle title={title}>
        <Layout>
          <SiderCustom collapsed={this.state.collapsed} />
          <Layout style={{flexDirection: 'column'}}>
            <HeaderCustom toggle={this.toggle} collapsed={this.state.collapsed} user={auth.data || {}} />
            <Content style={{ margin: '0 16px', overflow: 'initial', flex: '1 1 0' }}>
              <Routes auth={auth} onRouterChange={this._setTitle} />
            </Content>
            <Footer style={{ textAlign: 'center' }}>
            React-Admin ©{new Date().getFullYear()} Created by 865470087@qq.com
            </Footer>
          </Layout>
        </Layout>
      </DocumentTitle>
    )
  }
}

const mapStateToProps = state => {
  const { auth = {data: {}}, responsive = {data: {}} } = state.httpData;
  return {auth, responsive};
};
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);