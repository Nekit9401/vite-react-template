import { GameLayout } from './GameLayout';
import { Field } from '../Field';
import { Information } from '../Information';
import { RESTART_GAME } from '../../redux/actions/restartGame';
import { connect } from 'react-redux';
import { Component } from 'react';
import PropTypes from 'prop-types';

class GameContainer extends Component {
	handleRestart = () => {
		this.props.restartGame();
	};

	render() {
		return (
			<GameLayout onRestart={this.handleRestart}>
				<Information />
				<Field />
			</GameLayout>
		);
	}
}

GameContainer.propTypes = {
	restartGame: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
	restartGame: () => dispatch(RESTART_GAME),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);
