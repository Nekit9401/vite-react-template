import { useState, useEffect } from 'react';
import { store } from '../../redux/store';
import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const Field = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);

	const { field } = state;

	const handleCellClick = (idx) => {
		store.dispatch({ type: 'CELL_CLICK', payload: idx });
	};

	return (
		<>
			<FieldLayout field={field} onCellClick={handleCellClick} />
		</>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
};
