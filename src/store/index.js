import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import cashReducer from './cashReducer';
import { customerReducer } from './customerReducer';

const rootReducers = combineReducers({
	cash: cashReducer,
	customers: customerReducer,
});

const store = createStore(
	rootReducers,
	composeWithDevTools(applyMiddleware(thunk)),
);

export { store };
