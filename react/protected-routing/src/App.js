import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Category from './Category';
import Login, { fakeAuth } from './Login';

class App extends Component {
  render () {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item"><Link to="/">Homes</Link></li>
            <li className="nav-item"><Link to="/category">Category</Link></li>
            <li className="nav-item"><Link to="/products">Products</Link></li>
            <li><Link to="/admin">Admin area</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/category' component={Category}/>
          <PrivateRoute path='/admin' component = {Admin} />
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    )
  }
}

const PrivateRoute = ({ component: Component, ...rest}) => {
  console.log(rest);
  return (
    <Route
    {...rest}
    render={(props) => fakeAuth.isAuthenticated === true
    ? <Component {...props} />
    : <Redirect to={{pathname: '/login', state: { from: props.location}}} />
    }
    >
    </Route>
  )
}

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Admin = () => {
  return(<div> <h2>Welcome admin </h2></div>)
}

export default App
