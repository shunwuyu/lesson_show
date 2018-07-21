import React, { Component } from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';
import { Badge, WingBlank, WhiteSpace, Button } from 'antd-mobile';

const repo = 'https://github.com/cncolder/antd-mobile-web'

class App extends Component {
  render() {
    return (
      <WingBlank>
        <WhiteSpace size="lg" />
        <Button
          type="primary"
          onClick={() => {window.location.href=repo}}>
          <Badge text='new'/>
        Ant design mobile web entry
        </Button>
      </WingBlank>
    );
  }
}

export default App;
