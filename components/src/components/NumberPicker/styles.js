import styled from 'styled-components';

export const Inner = styled.div`
	flex: 1;
	max-width: 400px;
	text-align: center;
`;

export const FilterButtonGroup = styled.div`
	box-shadow: inset 0 -1px 0 0 rgba(227, 232, 236, 1);
	height: 45px;
	text-align: right;
`;

export const Title = styled.p`
	color: rgba(122, 122, 122, 1);
	font: 400 13px 'Lato';
	letter-spacing: 0.63px;
	margin: 16px 0 0;
`;

export const Validation = styled.p`
	color: rgba(122, 122, 122, 1);
	font: 400 11px 'Lato';
	margin: 4px 0 0;
	visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
`;

export const InputGroup = styled.div`
	margin: 24px auto;
	padding: 8px 0;
	position: relative;
	width: 128px;
`;

export const Input = styled.input`
	background: white;
	border: none;
	box-shadow: inset 0 0 0 1px rgba(213, 216, 220, 1);
	color: rgba(122, 122, 122, 1);
	height: 40px;
	outline: none;
	padding: 0 15px 0 8px;
	transition: box-shadow 0.195s cubic-bezier(0.4, 0, 0.2, 1),
		color 0.195s cubic-bezier(0.4, 0, 0.2, 1);
	width: 100%;

	&:focus {
		box-shadow: inset 0 0 0 1px rgba(0, 129, 187, 1);
		color: rgba(0, 129, 187, 1);
	}

	&::selection {
		background: rgba(0, 129, 187, 1);
		color: white;
	}
`;

export const Unit = styled.div`
	background: rgba(255, 255, 255, 0.4);
	color: rgba(122, 122, 122, 1);
	display: block;
	font-size: 12px;
	font-weight: 400;
	padding: 4px 8px;
	position: absolute;
	right: 30px;
	top: 9px;
`;

export const ButtonGroup = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	width: 30px;
`;

export const Button = styled.button`
	align-items: center;
	background: rgba(0, 129, 187, 1);
	border: none;
	color: white;
	cursor: pointer;
	display: flex;
	font: 700 16px/1 'Lato';
	height: 27px;
	justify-content: center;
	outline: none;
	position: relative;
	transition: background 0.192s cubic-bezier(0.4, 0, 0.2, 1);
	width: 30px;

	&:not(:first-child)::before {
		background: rgba(255, 255, 255, 0.2);
		content: '';
		display: block;
		height: 1px;
		left: 20%;
		position: absolute;
		top: 0;
		width: 60%;
	}

	&:hover {
		background: rgba(1, 167, 226, 1);

		/* stylelint-disable selector-max-type, selector-max-specificity */
		&:not(:first-child)::before,
		& + button:before {
			display: none;
		}
		/* stylelint-enable */
	}

	&:disabled {
		pointer-events: none;
	}
`;
