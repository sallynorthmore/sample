import styled from 'styled-components';

const width = 336;
const panelWidth = `${width}px`;
const easeInOut = 'cubic-bezier(0.4, 0.0, 0.2, 1)';
const accentBlue = 'rgba(0, 129, 187, 1)';

export const Inner = styled.div`
	background: white;
	border-left: 1px solid rgba(216, 216, 216, 0.8);
	border-right: 1px solid rgba(216, 216, 216, 0.8);
	display: flex;
	flex-direction: column;
	min-width: ${panelWidth};
	overflow: hidden;
	position: relative;
`;

export const Search = styled.div`
	position: relative;
`;

export const Clear = styled.button`
	background: transparent;
	border: 0 none;
	color: rgba(11, 26, 52, 1);
	cursor: pointer;
	display: inline-block;
	font: 300 13px/1 'Lato';
	justify-content: center;
	opacity: 0.3;
	outline: none;
	padding: 16px 0 0;
	position: absolute;
	right: 0;
	top: 0;
	transition: opacity 0.195s cubic-bezier(0, 0, 0.2, 1);
	user-select: none;
	width: auto;
	z-index: 1;

	&:hover {
		color: rgba(0, 129, 187, 1);
		opacity: 1;
	}

	&:disabled {
		opacity: 0;
		pointer-events: none;
	}
`;

export const Content = styled.div`
	display: flex;
	flex: 1;
	opacity: ${props => (props.isPanelClosing ? '0' : '1')};
	overflow: hidden;
	position: relative;
	transform: ${props =>
		props.isOpen ? `translateX(-${panelWidth})` : 'translateX(0)'};
	transition: transform 0.195s cubic-bezier(0.4, 0, 1, 1);
	width: ${width * 2}px;
`;

export const Nav = styled.div`
	display: flex;
	flex-direction: column;
	overflow: hidden;
	position: relative;
	width: ${panelWidth};
`;

export const Header = styled.header`
	flex: 0 0 72px;
	margin: 0 16px;
	min-height: 72px;
	padding: 24px 0 0;
	position: relative;
`;
export const Items = styled.div`
	background: white;
	flex: 1 1 0;
	margin: 0;
	overflow: auto;
	padding: 16px 0;
	position: relative;
	width: 100%;
`;

export const Item = styled.div`
	align-items: center;
	color: ${props => (props.hasFilters ? accentBlue : 'rgba(51, 51, 51, 1)')};
	cursor: pointer;
	display: ${props => (props.isVisible ? 'flex' : 'none')};

	justify-content: space-between;
	margin: 0;
	min-height: 54px;
	padding: 0 16px;
	position: relative;
	transition: background 0.195s ${easeInOut}, color 0.195s ${easeInOut};
	user-select: none;
	width: 100%;

	&:hover {
		background: rgba(248, 248, 248, 1);
		color: ${accentBlue};
	}
`;

export const ItemIcon = styled.span`
	display: inline-block;
	margin-right: 0;
	transform: rotate(-90deg);
`;

export const Label = styled.span`
	font: 400 14px/1 'Lato';
	margin-right: 4px;
	min-width: 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Summary = styled.span`
	display: inline-block;
	font-weight: 400;
	margin: auto 16px auto auto;
	max-width: 136px;
	overflow: hidden;
	padding: 0 16px 0 0;
	position: relative;
	text-overflow: ellipsis;
	white-space: nowrap;

	&::after {
		background: rgba(226, 228, 231, 1);
		content: '';
		display: block;
		height: 10px;
		position: absolute;
		right: 0;
		top: 2px;
		width: 1px;
	}
`;

export const Footer = styled.div`
	background: white;
	flex: 0 0 72px;
	margin: auto 0 0;
	min-height: 72px;
	padding: 16px;
	width: 100%;
`;

export const Filters = styled.div`
	flex: 0 0 ${panelWidth};
	overflow: hidden;
	max-width: ${panelWidth};
	position: relative;
	width: ${panelWidth};
`;

export const FilterItem = styled.div`
	background: white;
	display: flex;
	height: 100%;
	left: 0;
	overflow: hidden;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: ${props => (props.isActive ? '2' : '0')};
`;
