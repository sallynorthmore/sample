import styled from 'styled-components';

const blue = 'rgba(14, 176, 234, 1)';
const easeInOut = 'cubic-bezier(0.4, 0, 0.2, 1)';

export const Inner = styled.div`
	align-items: center;
	display: flex;
	position: relative;
	width: 100%;
`;

export const Icon = styled.div`
	display: inline-block;
	flex: 0 0 18px;
	margin: auto auto auto 16px;
	opacity: 0.6;
	padding-top: 4px;
	width: 18px;
`;

export const Form = styled.div`
	display: inline-block;
	flex: 1;
	position: relative;
	width: 100%;
`;

export const Input = styled.input`
	border: 0;
	font: 400 16px/ 1 'Lato';
	height: 48px;
	outline: none;
	padding: 8px 16px;
	width: 100%;

	&::placeholder {
		color: rgba(11, 26, 52, 0.5);
		font: 300 13px/ 1 'Lato';
		line-height: 1.5;
	}

	&:focus {
		color: ${blue};
		font-weight: 400;
	}
`;

export const Button = styled.button`
	align-items: center;
	background: linear-gradient(
		to right,
		rgba(255, 255, 255, 0) 0%,
		white 50%,
		white 100%
	);
	border: 0 none;
	color: rgba(51, 51, 51, 0.3);
	cursor: pointer;
	display: inline-flex;
	height: 48px;
	justify-content: flex-end;
	outline: none;
	padding: 0;
	position: absolute;
	right: 16px;
	top: 0;
	transition: color 0.195s ${easeInOut};
	user-select: none;
	width: 40px;
	z-index: 1;

	&:hover {
		color: rgba(51, 51, 51, 1);
	}

	&:disabled {
		opacity: 0;
		pointer-events: none;
	}
`;

export const Dropdown = styled.div`
	box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.5);
	display: ${props => (props.isActive ? 'block' : 'none')};
	position: absolute;
	width: 100%;
`;

export const Overlay = styled.div`
	background: none;
	height: 100%;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
`;

export const Items = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const ItemText = styled.span`
	font-weight: 400;
	margin: 0 0 0 8px;
	opacity: 0.5;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Item = styled.li`
	align-items: baseline;
	background: ${props => (props.isActive ? 'rgba(248, 248, 248, 1)' : 'white')};
	color: rgba(51, 51, 51, 1);
	cursor: auto;
	display: flex;
	font: 700 14px 'Lato';
	height: 40px;
	overflow: hidden;
	padding: 12px 16px 0;
	position: relative;
	transition: background 0.15s ${easeInOut};
	user-select: none;
	white-space: nowrap;

	&::before {
		background: rgba(227, 232, 236, 1);
		content: '';
		display: block;
		height: 1px;
		left: 0;
		position: absolute;
		top: 0;
		width: 100%;
	}

	&:hover {
		background: rgba(248, 248, 248, 1);
		color: ${blue};

		/* stylelint-disable-next-line */
		& ${ItemText} {
			opacity: 1;
		}
	}
`;

export const NoResult = styled.span`
	align-items: center;
	background: white;
	color: rgba(101, 101, 101, 1);
	display: flex;
	height: 100%;
	left: 0;
	padding: 8px 0;
	position: absolute;
	top: 0;
	width: 100%;
`;

export const NoResultIcon = styled.span`
	color: rgba(153, 153, 153, 1);
	margin: 0 8px 0 16px;
	width: 24px;
`;

export const Tags = styled.div`
	display: inline-flex;
	flex-wrap: nowrap;
`;

export const Tag = styled.div`
	display: block;
	padding: 0 0 0 8px;
`;
