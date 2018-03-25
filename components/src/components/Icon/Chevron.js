import React from 'react';
import PropTypes from 'prop-types';

const Chevron = props => (
	<svg width={`${props.width}px`} viewBox="0 0 11 7">
		<g fill="none" stroke="none" strokeWidth="1">
			<g
				stroke={props.fillColor}
				strokeWidth="1.2"
				transform="translate(-321.000000, -147.000000)"
			>
				<polyline
					points="324.045716 144.990072 329.062822 150.007178 324.009928 155.060072"
					transform="translate(326.536375, 150.025072) rotate(90.000000) translate(-326.536375, -150.025072) "
				/>
			</g>
		</g>
	</svg>
);

Chevron.propTypes = {
	fillColor: PropTypes.string,
	width: PropTypes.number,
};

Chevron.defaultProps = {
	fillColor: 'currentColor',
	width: 18,
};

export default Chevron;
