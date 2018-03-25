import styled from 'styled-components';

const fade = `opacity .225s cubic-bezier(0.4, 0.0, 0.2, 1)`;

export const Inner = styled.div`
	align-items: center;
	color: white;
	display: flex;
	flex: 1;
	flex-direction: column;
	width: 100%;
`;

export const Slides = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	margin: 0;
	overflow: hidden;
	padding: 0;
	position: relative;
	transform: translate3d(0, 0, 0);
	width: ${props => props.width};
`;

export const Track = styled.div`
	display: flex;
	flex: 1;
	height: 100%;
	left: 0;
	position: relative;
	top: 0;
	/* stylelint-disable-next-line value-list-max-empty-lines */
	transform: ${props =>
		props.position
			? `translate3d(${props.position}, 0, 0)`
			: 'translate3d(0, 0, 0)'};
	transition: transform 0.225s cubic-bezier(0.4, 0, 0.6, 1);
	width: ${props => props.width};
`;

export const Slide = styled.div`
	/*  stylelint-disable order/properties-alphabetical-order */
	min-height: 1px;
	opacity: ${props => (props.active ? '1' : '0')};
	transition: ${fade};
	width: ${props => props.width}px;

	/* Chromium 49 hackhttps://github.com/philipwalton/flexbugs/issues/84 */
	bottom: 0;
	position: absolute;
	top: 0;
	display: block;
	left: ${props => props.position}px;
	/*  stylelint-enable */
`;

export const SlideInner = styled.div`
	height: 100%;
	width: ${props => props.width};
`;

export const Navigation = styled.div`
	align-items: center;
	border-top: 2px solid black;
	display: ${props => (props.active ? 'flex' : 'none')};
	flex: 0 0 64px;
	justify-content: space-between;
	padding: 24px 16px;
	width: 100%;
`;

export const NavButton = styled.button`
	align-items: center;
	background: transparent;
	border: 0 transparent;
	color: white;
	cursor: pointer;
	display: flex;
	flex: 0 0 40px;
	height: 40px;
	justify-content: center;
	opacity: 1;
	outline: none;
	transform: ${props => (props.previous ? 'rotate(90deg)' : 'rotate(-90deg)')};
	transition: ${fade};
	width: 40px;

	&:hover {
		opacity: 1;
	}
`;

export const Progress = styled.div`
	background: transparent;
	display: flex;
	flex: 1;
	justify-content: center;
	margin: 0 0 0 -8px;
`;

export const ProgressButton = styled.div`
	cursor: pointer;
	opacity: ${props => (props.active ? '1' : '0.3')};
	padding: 16px 8px;
	transition: ${fade};

	&::before {
		background: white;
		border-radius: 50%;
		content: '';
		display: block;
		height: 8px;
		width: 8px;
	}

	&:hover {
		opacity: 1;
	}
`;
