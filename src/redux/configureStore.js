import {combineReducers, createStore, applyMiddleware} from 'redux';
import {Mentors} from "./dishes";
import {Requests} from "./leaders";

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {createForms} from 'react-redux-form';
import {InitialFeedback} from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            mentors: Mentors,
            requests: Requests,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
