import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routesConfig from './config';
import AllComponents from '../components';

export default class CRouter extends Component {
  render() {
    const { onRouterChange } = this.props;
    return (
      <Switch>
        {
          Object.keys(routesConfig).map(key => 
            routesConfig[key].map(r => {
              const route = r => {
                const Component = AllComponents[r.component];
                return (
                  <Route 
                    key={r.route || r.key}
                    exact
                    path={r.route || r.key}
                    render={props=> {
                      return <Component />
                    }}
                  />
                )
              }
              return r.component?route(r):r.subs.map(r => route(r));
            })
          )
        }
      </Switch>
    )
  }
}