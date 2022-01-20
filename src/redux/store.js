import { createStore } from 'redux';

const reducer = (state = { cash: 10 }, action) => {
	switch (action.type) {
		case 'ADD':
			return { ...state, cash: state.cash + action.payload };
		case 'SUBSTRACT':
			return { ...state, cash: state.cash - action.payload };
		default:
			return state;
	}
};

const store = createStore(reducer);

export { store };
