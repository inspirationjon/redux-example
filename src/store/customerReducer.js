const ADD_CUSTOMER = 'ADD_CUSTOMER';
const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

const customerReducer = (state = { customers: [] }, action) => {
	switch (action.type) {
		case ADD_CUSTOMER:
			return {
				...state,
				customers: [...state.customers, action.payload],
			};
		case DELETE_CUSTOMER:
			return {
				...state,
				customers: state.customers.filter(
					(customer) => customer.id !== action.payload,
				),
			};
		default:
			return state;
	}
};

const addCustomerAction = (payload) => ({
	type: ADD_CUSTOMER,
	payload,
});

const deleteCustomerAction = (payload) => ({
	type: DELETE_CUSTOMER,
	payload,
});

export { customerReducer, addCustomerAction, deleteCustomerAction };
