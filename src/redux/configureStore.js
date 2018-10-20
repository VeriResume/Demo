import {createStore, applyMiddleware} from 'redux';
import { User } from './user';
import thunk from 'redux-thunk';

export const ConfigureStore = (data) => {


    const store = createStore(
        User, data, applyMiddleware(thunk)
    );

    return store;
}