import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import immutableState from 'redux-immutable-state-invariant';
import DevTools from './devtools';

const middleware = applyMiddleware(immutableState());
const storeFactory = compose(middleware, DevTools.instrument())(createStore);
export default storeFactory(reducers);
