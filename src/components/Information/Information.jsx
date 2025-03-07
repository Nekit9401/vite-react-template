import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
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
