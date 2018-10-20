import {createStore} from 'redux';
import { User } from './user';
import { combineReducers } from 'redux-immutable';
import { List, Map } from 'immutable';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            user: User
        })
    );

    return store;
}