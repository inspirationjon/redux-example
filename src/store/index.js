import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import cashReducer from './cashReducer';
import { customerReducer } from './customerReducer';

const rootReducers = combineReducers({
	cash: cashReducer,
	customers: customerReducer,
});

const store = createStore(rootReducers, composeWithDevTools());

export { store };
