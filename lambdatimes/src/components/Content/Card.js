import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
	return (
		<div className="card">
			<div className="headline">
				{props.card.headline}
				{/* headline goes here */}
			</div>
			<div className="author">
				<div className="img-container">
					<img
						src={props.card.img /* image source goes here */}
						alt="alt text"
					/>
				</div>
				<span>
					By {props.card.author}
					{/* author goes here */}
				</span>
			</div>
		</div>
	);
};

// Make sure to include PropTypes.

export default Card;

Card.propTypes = {
	card: PropTypes.shape({
		headlines: PropTypes.string,
		tab: PropTypes.string,
		img: PropTypes.string,
		author: PropTypes.string,
	}),
};
