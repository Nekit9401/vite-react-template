import { useState, useEffect } from 'react';
import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';
import { store } from '../../redux/store';

export const Information = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return unsubscribe;
	}, []);

	const { isDraw, isGameEnded, currentPlayer } = state;

	let status;
	if (isDraw) {
		status = 'Ничья!';
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}!`;
	} else {
		status = `Текущий ход: ${currentPlayer}`;
	}

	return (
		<>
			<InformationLayout status={status} />
		</>
	);
};

Information.propTypes = {
	currentPlayer: PropTypes.oneOf(['X', '0']),
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
