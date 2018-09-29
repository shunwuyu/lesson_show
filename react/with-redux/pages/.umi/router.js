import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import Layout from '/lesson/lesson_show/react/with-redux/layouts/index.js';


let Router = DefaultRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Layout><Switch>
    <Route exact path="/extinfo" component={require('../extinfo/page.js').default} />
    <Route exact path="/" component={require('../index.js').default} />
  </Switch></Layout>
</Router>
  );
}
