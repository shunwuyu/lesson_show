import { Route } from  'react-router-dom';
import routes from '../config/routes';
import PropTypes from 'prop-types';

const PropTypes = {
  history: PropTypes.object.isRequired
}

const Router = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      {routes.map((route, idx) => (
        <Route key={idx} {...route}/>
      ))}
    </div>
  </ConnectedRouter>
);

Router.propTypes = propTypes;
export default Router;