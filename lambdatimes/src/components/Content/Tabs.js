import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

const Tabs = props => {
	return (
		<div className="tabs">
			<div className="topics">
				<span className="title">TRENDING TOPICS:</span>
				{props.tabs.map(tab => (
					<Tab
						selectTabHandler={props.selectTabHandler}
						selectedTab={props.selectedTab}
						tab={tab}
						key={tab}
					/>
				))}
				{/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
			</div>
		</div>
	);
};

// Make sure to use PropTypes to validate your types!
export default Tabs;

Tabs.propTypes = {
	tabs: PropTypes.array,
	selectTabHandler: PropTypes.func,
	selectedTab: PropTypes.func,
};
