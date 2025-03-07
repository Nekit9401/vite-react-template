import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const Field = ({ field, onCellClick }) => {
	return (
		<>
			<FieldLayout field={field} onCellClick={onCellClick} />
		</>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
};
