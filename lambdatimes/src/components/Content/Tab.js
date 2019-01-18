import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
	/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
	let x = '';
	if (props.tab === props.selectedTab) {
		x = 'tab active-tab';
	}
	x = 'tab';

	return (
		<div
			className={x}
			onClick={e => props.selectTabHandler(e, props.tab)}
			/* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
		>
			{props.tab.toUpperCase()}
		</div>
	);
};

// Make sure you include PropTypes on your props.

export default Tab;

Tab.propTypes = {
	tab: PropTypes.string,
	selectTabHandler: PropTypes.func,
	selectedTab: PropTypes.func,
};
