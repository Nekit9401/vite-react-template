import { Component } from 'react';
import PropTypes from 'prop-types';

export class GameLayout extends Component {
	render() {
		const { children, onRestart } = this.props;

		return (
			<>
				<div className="flex flex-col items-center bg-white p-5 rounded-xl shadow-lg">
					{children}
				</div>
				<button
					className="mt-5 px-5 py-2.5 text-xl text-white bg-blue-600 hover:bg-blue-700 border-none rounded-lg
					cursor-pointer transition-colors duration-300 ease-in-out transition-transform duration-200 ease-in-out
					active:scale-95"
					onClick={onRestart}
				>
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
