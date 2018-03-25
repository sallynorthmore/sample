import styled from 'styled-components';

export const Inner = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	max-width: 336px;
	width: 100%;
`;

export const Title = styled.h3`
	align-items: center;
	color: rgba(51, 51, 51, 1);
	display: flex;
	font: 400 14px/1 'Lato';
	justify-content: space-between;
	margin: 0;
	min-height: 54px;
	padding: 0 16px;
	user-select: none;
	width: 100%;
`;

export const Search = styled.div`
	flex: 0 0 50px;
	min-height: 50px;
`;

export const TitleIcon = styled.span`
	display: inline-block;
	margin-right: 0;
	${props => (props.isOpen ? 'transform: rotate(-180deg)' : null)};
`;

export const Items = styled.div`
	flex: 1 1 0;
	overflow: auto;
`;

export const Item = styled.div`
	position: relative;
`;

export const Choice = styled.div`
	align-items: center;
	background: white;
	color: ${props =>
		props.isSelected ? 'rgba(0, 129, 187, 1)' : 'rgba(51, 51, 51, 1)'};
	cursor: pointer;
	display: inline-flex;
	font: 400 14px/1 'Lato';
	justify-content: space-between;
	max-width: 336px;
	min-height: 54px;
	padding: 0 16px;
	transition: background 0.195s cubic-bezier(0.4, 0, 0.2, 1);
	user-select: none;
	width: 100%;

	&:hover {
		background: rgba(248, 248, 248, 1);
		color: rgba(0, 129, 187, 1);
	}
`;

export const Label = styled.span`
	display: inline-block;
	font-weight: inherit;
	overflow: hidden;
	padding-right: 32px;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const ChoiceIcon = styled.span`
	display: inline-block;
	margin: auto 0 auto auto;
	opacity: ${props => (props.isSelected ? 1 : 0)};
`;
