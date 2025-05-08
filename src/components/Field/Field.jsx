import { Component } from 'react';
import { cellClick } from '../../redux/actions/cellClick';
import { selectField } from '../../redux/selectors';
import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FieldContainer extends Component {
	handleCellClick = (idx) => {
		this.props.cellClick(idx);
	};

	render() {
		const { field } = this.props;
		return <FieldLayout field={field} onCellClick={this.handleCellClick} />;
	}
}

FieldContainer.propTypes = {
	field: PropTypes.array,
	cellClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
	field: selectField(state),
});

const mapDispatchToProps = {
	cellClick,
};

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);
