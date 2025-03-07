import styles from './Field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, onCellClick }) => {
	return (
		<>
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
		</>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
};
