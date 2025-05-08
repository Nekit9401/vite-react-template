import { Component } from 'react';
import styles from './Information.module.css';
import PropTypes from 'prop-types';

export class InformationLayout extends Component {
	render() {
		const { status } = this.props;

		return <div className={styles.information}>{status}</div>;
	}
}

InformationLayout.propTypes = {
	status: PropTypes.string,
};
