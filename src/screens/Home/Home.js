import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function Home() {
	const dispatch = useDispatch();
	const cash = useSelector((state) => state.cash.cash);

	const addCash = () => {
		dispatch({ type: 'ADD', payload: 2 });
	};

	const substractCash = () => {
		dispatch({ type: 'SUBSTRACT', payload: 2 });
	};

	return (
		<>
			<h1>Home</h1>

			<button onClick={addCash}>Add</button>
			<strong>{cash}</strong>
			<button onClick={substractCash}>Substract</button>
		</>
	);
}

export default Home;
