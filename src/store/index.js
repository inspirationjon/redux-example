import { createStore, combineReducers } from 'redux';

import cashReducer from './cashReducer';
import customerReducer from './customerReducer';

const rootReducers = combineReducers({
	cash: cashReducer,
	customer: customerReducer,
});

const store = createStore(rootReducers);

export { store };
