import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

export default (defualtState={}) => {
    return createStore(reducer, defualtState, applyMiddleware(thunk));
}
