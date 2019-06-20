/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from 'reducers';

/**
 * @description
 * Create and export a Redux store.
 * Apply thunk and logger middleware.
 *
 * @type {function}
 */

let middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(createLogger());
}

export default createStore(reducer, applyMiddleware(...middlewares));
