import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import React from 'react'
// import axios from 'axios'
import Detail from './detail/index'
import About from './about/index'
import Login from './login/index'
import Accounts from './accounts'
import './index.scss';

class Instagram extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Detail}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login} />
          <Route path="/accounts" component={Accounts}/>
        </Switch>
      </Router>
    )
  }
}

export default Instagram;