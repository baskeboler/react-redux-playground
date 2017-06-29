import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import {Provider} from 'react-redux';
import DevTools from './devtools';

window.onload = () => {
    const root = (
        <Provider store={store}>
            <div>
                <App />
                <DevTools />
            </div>
        </Provider>
    ); 
    ReactDOM.render(root, document.getElementById('root'));
}
registerServiceWorker();
