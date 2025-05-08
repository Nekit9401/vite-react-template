import { Component } from 'react';
// import styles from './Field.module.css';
import PropTypes from 'prop-types';

export class FieldLayout extends Component {
	render() {
		const { field, onCellClick } = this.props;

		return (
			<div className={'grid grid-cols-3 grid-rows-3 gap-2.5 my-5'}>
				{field.map((cell, idx) => (
					<button
						key={idx}
						className={`
						w-[100px] h-[100px] text-4xl font-bold
						flex items-center justify-center
						border-2 border-gray-300 rounded-lg
						cursor-pointer
						transition-transform duration-200 ease-in-out
						${
							cell === 'X'
								? 'bg-gray-200 text-red-700 border-none'
								: cell === '0'
									? 'bg-gray-200 text-green-700 border-none'
									: 'bg-gray-100 hover:bg-gray-200'
						}
						active:scale-95
					`}
						onClick={() => onCellClick(idx)}
						disabled={cell !== ''}
					>
						{cell}
					</button>
				))}
			</div>
		);
	}
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
};
