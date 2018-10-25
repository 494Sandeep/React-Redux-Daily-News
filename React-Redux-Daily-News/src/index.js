import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise'
//Components
import App from './components/app';
import Reducers from './reducers'


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducers)}>
        <App />
    </Provider>, document.getElementById('root')
)