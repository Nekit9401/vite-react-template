import { Component } from 'react';
import styles from './Field.module.css';
import PropTypes from 'prop-types';

export class FieldLayout extends Component {
	render() {
		const { field, onCellClick } = this.props;

		return (
			<div className={styles.field}>
				{field.map((cell, idx) => (
					<button
						key={idx}
						className={`${styles.cell} ${
							cell === 'X' ? styles.x : cell === '0' ? styles.zero : ''
						}`}
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
