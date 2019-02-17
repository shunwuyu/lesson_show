import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import React from 'react'
import axios from 'axios'
import Detail from './detail/index'
import '@scss/base.scss'
import './index.scss'

class Instagram extends React.Component {
  constructor(props) {
    super(props);
  }
  

  componentDidMount() {
    axios.get('/api')
      .then(data => {
        console.log(data);
      })
  }

  render () {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Detail}/>
        </Switch>
      </Router>
    )
  }
}

export default Instagram;