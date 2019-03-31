import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import * as serviceWorker from './serviceWorker';
import history from './history';
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" render={() => <App />} />
      </Router>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();
