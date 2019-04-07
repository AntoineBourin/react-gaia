import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { routes } from './routes';
import LoginPageContainer from './modules/user/containers/LoginPageContainer';
import Dashboard from './modules/basepage/components/Dashboard';
import ProjectKanbanContainer from './modules/project/containers/ProjectKanbanContainer';

const App = () => (
  <div className="App">
    <Route exact path={routes.home} component={LoginPageContainer} />
    <Route exact path={routes.dashboard} component={Dashboard} />
    <Route
      exact
      path={routes.project}
      render={({ match }) => (
        <ProjectKanbanContainer projectId={match.params.id} />
      )}
    />
  </div>
);

export default withRouter(App);
