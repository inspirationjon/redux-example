import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
	addCustomerAction,
	deleteCustomerAction,
} from '../../store/customerReducer';

import { fetchCustomers } from '../../store/asyncActions';

function Home() {
	const dispatch = useDispatch();
	const cash = useSelector((state) => state.cash.cash);
	const customers = useSelector((state) => state.customers.customers);

	const addCash = () => {
		dispatch({ type: 'ADD', payload: 2 });
	};

	const substractCash = () => {
		dispatch({ type: 'SUBSTRACT', payload: 2 });
	};

	const addCustomer = () => {
		const newCustomer = {
			name: 'Eshmat ' + customers.length,
			id: customers[customers.length - 1]?.id + 1 || 0,
		};

		dispatch(addCustomerAction(newCustomer));
	};

	const deleteCustomer = (id) => {
		dispatch(deleteCustomerAction(id));
	};
	return (
		<>
			<h1>Home</h1>

			<div>
				<button onClick={addCash}>Add</button>
				<strong>{cash}</strong>
				<button onClick={substractCash}>Substract</button>
			</div>

			<div>
				<button onClick={addCustomer}>Add Client</button>

				<button onClick={() => dispatch(fetchCustomers())}>More</button>

				<ul>
					{customers.length > 0 &&
						customers.map((customer) => (
							<li
								key={customer.id}
								onClick={() => deleteCustomer(customer.id)}>
								{customer.name}
							</li>
						))}
				</ul>
			</div>
		</>
	);
}

export default Home;
