import React from 'react';
import PropTypes from 'prop-types';

const Check = props => (
	<svg
		width={`${props.width}px`}
		viewBox="0 0 14 13"
	>
		<g fill="none" stroke="none" strokeWidth="1">
			<g
				stroke={props.fillColor}
				strokeWidth="1.5"
				transform="translate(-175.000000, -208.000000)"
			>
				<polyline
					points="176 215.527473 179.75 219.153846 188 209"
				/>
			</g>
		</g>
	</svg>
);

Check.propTypes = {
	fillColor: PropTypes.string,
	width: PropTypes.number,
};

Check.defaultProps = {
	fillColor: 'currentColor',
	width: 18,
};

export default Check;
