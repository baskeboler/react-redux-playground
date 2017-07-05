import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import * as Actions from './actions/actions';

import { Provider } from 'react-redux';
import DevTools from './devtools';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Route } from 'react-router';
import Todos from './views/todos';
import Profile from './views/profile';
import store from './store';
import Giphy from './components/giphy/search';
import Modals from './modals';
import Currency from './views/currency';

/*
 * Dispatch some actions for fun.
 */
store.dispatch(Actions.addTag('ramones'));
store.dispatch(Actions.addTag('bullets'));
store.dispatch(Actions.addTodo({ text: 'Darle de comer al perro' }));
store.dispatch(Actions.addTodo({ text: 'Hacer un montón de cosas' }));
store.dispatch(Actions.requestExchangeRates());
store.dispatch(
  Actions.createPost({
    title: 'puto',
    body: 'laconchatumadre',
    userId: 1
  })
);

// first we load list of posts, then when promise resolves we load comments
store.dispatch(Actions.listPost()).then(() => {
  // ok, posts are loaded.
  store.dispatch(Actions.listPostComments(1));
});
// ok, thats enough

window.onload = () => {
  const location = window.location;
  const root = (
    <Provider store={store}>
      <Router history={window.history}>
        <div>
          <Modals />
          <DevTools />
          <ul>
            <li>
              <NavLink to="/">Todos</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/giphy">Giphy</NavLink>
            </li>
            <li>
              <NavLink to="/rates">Exchange Rates</NavLink>
            </li>
          </ul>

          <Route
            exact
            location={location}
            path="/"
            component={Todos}
            key={location.key}
          />
          <Route
            path="/profile"
            location={location}
            key={location.key}
            component={Profile}
          />
          <Route
            path="/giphy"
            location={location}
            key={location.key}
            component={Giphy}
          />
          <Route
            path="/rates"
            location={location}
            key={location.key}
            component={Currency}
          />
        </div>
      </Router>
    </Provider>
  );
  render(root, document.getElementById('root'));
};

registerServiceWorker();
