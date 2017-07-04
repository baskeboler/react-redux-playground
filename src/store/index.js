import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import reducers from "../reducers";
import immutableState from "redux-immutable-state-invariant";
import DevTools from "../devtools";
import {routerMiddleware, routerReducer} from "react-router-redux";
import {createBrowserHistory} from "history";


export const history = createBrowserHistory();
const routerMiddlewareInstance = routerMiddleware(history);

const middleware = applyMiddleware(immutableState());
const storeFactory = compose(middleware, DevTools.instrument())(createStore);
export const store = storeFactory(combineReducers({
        ...reducers,
        router: routerReducer
    }),
    applyMiddleware(routerMiddlewareInstance));
