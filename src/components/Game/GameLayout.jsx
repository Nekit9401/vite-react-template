import { Component } from 'react';
import styles from './Game.module.css';
import PropTypes from 'prop-types';

export class GameLayout extends Component {
	render() {
		const { children, onRestart } = this.props;

		return (
			<>
				<div className={styles.game}>{children}</div>
				<button className={styles['restart-button']} onClick={onRestart}>
					Начать заново
				</button>
			</>
		);
	}
}

GameLayout.propTypes = {
	children: PropTypes.node,
	onRestart: PropTypes.func,
};
