import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { routes } from './routes';
import LoginPageContainer from './modules/user/containers/LoginPageContainer';

const App = () => (
  <div className="App">
    <Route path={routes.home} component={LoginPageContainer} />
  </div>
);

export default withRouter(App);
