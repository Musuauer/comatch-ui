import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { notificationsReducer } from '../src/core/ui/containers/Notifications/redux/reducer';

const middleware = [];

const enhancer = compose(applyMiddleware(...middleware));

const rootReducer = combineReducers({ notifications: notificationsReducer });

const store = createStore(rootReducer, enhancer);

export { store };
