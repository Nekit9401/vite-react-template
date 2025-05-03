import { cellClick } from '../../redux/actions/cellClick';
import { selectField } from '../../redux/selectors';
import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

export const Field = () => {
	const dispatch = useDispatch();

	const field = useSelector(selectField);

	const handleCellClick = (idx) => {
		dispatch(cellClick(idx));
	};

	return (
		<>
			<FieldLayout field={field} onCellClick={handleCellClick} />
		</>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
};
