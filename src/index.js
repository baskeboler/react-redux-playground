import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import * as Actions from './actions/actions';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import DevTools from './devtools';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Route } from 'react-router';
import Todos from './views/todos';
import Profile from './views/profile';
import store, { history as browserHistory } from './store';
import Giphy from './components/giphy/search';
import Modals from './modals';
import Currency from './views/currency';
import { Navbar, Nav, NavItem, NavbarBrand } from 'react-bootstrap';

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
// const history = syncHistoryWithStore(browserHistory, store);

const root = (
  <Provider store={store}>
    <ConnectedRouter basename={process.env.PUBLIC_URL} history={browserHistory}>
      <div>
        <Modals />
        <DevTools />
        <Navbar>
          <Navbar.Header>
            <NavbarBrand>
              <span>react-redux-playground</span>
            </NavbarBrand>
          </Navbar.Header>
          <Nav>
            <NavItem>
              <NavLink to="/">Todos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="profile">Profile</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="giphy">Giphy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="rates">Exchange Rates</NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <Route
          exact
          // location={location}
          path="/"
          component={Todos}
          // key={location.key}
        />
        <Route
          path="/profile"
          // location={location}
          // key={location.key}
          component={Profile}
        />
        <Route
          path="/giphy"
          // location={location}
          // key={location.key}
          component={Giphy}
        />
        <Route
          path="/rates"
          // location={location}
          // key={location.key}
          component={Currency}
        />
      </div>
    </ConnectedRouter>
  </Provider>
);
window.onload = () => {
  const location = browserHistory.location;
  render(root, document.getElementById('root'));
};

registerServiceWorker();
