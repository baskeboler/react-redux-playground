import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import React from "react";
import {render} from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import * as Actions from "./actions/actions";

import {Provider} from "react-redux";
import DevTools from "./devtools";
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import {Route} from "react-router";

import Todos from "./views/todos";
import Profile from "./views/profile";
import {store} from "./store";
import {CSSTransitionGroup} from "react-transition-group";
import Giphy from "./components/giphy/search";
import Modals from "./modals";

store.dispatch(Actions.addTodo({text: 'Darle de comer al perro'}));
store.dispatch(Actions.addTodo({text: 'Hacer un montón de cosas'}));
store.dispatch(Actions.addTag('ramones'));
store.dispatch(Actions.addTag('bullets'));

window.onload = () => {
    const root = (
        <Provider store={store}>
            <Router >
                <div>
                    <Modals />
                    <DevTools/>
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
                    </ul>
                    <CSSTransitionGroup 
                        transitionName="fade"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}>

                        <Route exact path="/" component={Todos}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/giphy" component={Giphy}></Route>
                    </CSSTransitionGroup>

                </div>
            </Router>
        </Provider>
    );
    render(root, document.getElementById('root'));
};

registerServiceWorker();
