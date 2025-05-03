import { useSelector } from 'react-redux';
import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';
import {
	selectCurrentPlayer,
	selectIsDraw,
	selectIsGameEnded,
} from '../../redux/selectors';

export const Information = () => {
	const isDraw = useSelector(selectIsDraw);
	const isGameEnded = useSelector(selectIsGameEnded);
	const currentPlayer = useSelector(selectCurrentPlayer);

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
