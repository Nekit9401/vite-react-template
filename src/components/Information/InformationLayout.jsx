import { Component } from 'react';
import PropTypes from 'prop-types';

export class InformationLayout extends Component {
	render() {
		const { status } = this.props;

		return (
			<div className="text-2xl font-bold text-gray-800 mb-5 px-5 py-2.5 bg-gray-100 rounded-lg shadow-sm">
				{status}
			</div>
		);
	}
}

InformationLayout.propTypes = {
	status: PropTypes.string,
};
