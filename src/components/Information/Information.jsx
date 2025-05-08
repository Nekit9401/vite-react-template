import { connect } from 'react-redux';
import { InformationLayout } from './InformationLayout';
import PropTypes from 'prop-types';
import {
	selectCurrentPlayer,
	selectIsDraw,
	selectIsGameEnded,
} from '../../redux/selectors';
import { Component } from 'react';

class InformationContainer extends Component {
	getStatus = () => {
		const { isDraw, isGameEnded, currentPlayer } = this.props;

		return isDraw
			? 'Ничья!'
			: isGameEnded
				? `Победа: ${currentPlayer}!`
				: `Текущий ход: ${currentPlayer}`;
	};

	render() {
		return <InformationLayout status={this.getStatus()} />;
	}
}

InformationContainer.propTypes = {
	currentPlayer: PropTypes.oneOf(['X', '0']),
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isDraw: selectIsDraw(state),
	isGameEnded: selectIsGameEnded(state),
	currentPlayer: selectCurrentPlayer(state),
});

export const Information = connect(mapStateToProps)(InformationContainer);
