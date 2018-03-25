import React from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import clamp from 'lodash/clamp';
import Lozenge from '../Lozenge';
import { IconSearch, IconClose, IconExclamation } from '../Icon';
import {
	Inner,
	Input,
	Icon,
	Button,
	Dropdown,
	Overlay,
	Items,
	Item,
	ItemText,
	NoResult,
	NoResultIcon,
	Tags,
	Tag,
	Form,
} from './styles';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			cursorPosition: 0,
			filteredDataTypes: this.getFilteredDataTypes(''),
		};
		this.debouncedOnSearchChange = debounce(this.debouncedOnSearchChange, 200);
	}

	getTextValuesArray(searchText, dataType) {
		const fullTextValuesArray = searchText
			.split(',')
			.map(s => s.trim())
			.filter(s => s !== '');

		return dataType.allowMultipleTerms
			? fullTextValuesArray
			: fullTextValuesArray.slice(0, 1);
	}

	getFilteredDataTypes = searchText =>
		this.props.dataTypes.filter(
			dataType => (dataType.pattern ? searchText.match(dataType.pattern) : true)
		);

	debouncedOnSearchChange = searchText => {
		this.props.onSearchChange(searchText);
	};

	handleKeyDown = e => {
		const { cursorPosition, filteredDataTypes } = this.state;

		if (e.key === 'ArrowUp' && cursorPosition > 0) {
			this.setState(prevState => ({
				cursorPosition: prevState.cursorPosition - 1,
			}));
		} else if (
			e.key === 'ArrowDown' &&
			cursorPosition < filteredDataTypes.length - 1
		) {
			this.setState(prevState => ({
				cursorPosition: prevState.cursorPosition + 1,
			}));
		} else if (e.key === 'Enter') {
			this.handleSearchSelection(filteredDataTypes[cursorPosition]);
		}
	};

	handleSearchInputChangeEvent = e => {
		this.handleSearchChange({ searchText: e.target.value });
	};

	handleSearchChange = ({ searchText, debounce = true }) => {
		const filteredDataTypes = this.getFilteredDataTypes(searchText);
		this.setState({
			searchText,
			filteredDataTypes,
			cursorPosition: clamp(
				this.state.cursorPosition,
				0,
				filteredDataTypes.length - 1
			),
		});
		debounce
			? this.debouncedOnSearchChange(searchText)
			: this.props.onSearchChange(searchText);
	};

	clearSearchText = () => {
		this.handleSearchChange({ searchText: '', debounce: false });
	};

	handleSearchSelection = dataType => {
		const { searchOperationValues } = this.props;
		const textValuesArray = this.getTextValuesArray(
			this.state.searchText,
			dataType
		);

		const searchOpValues = searchOperationValues.some(
			v => v.dataTypeId === dataType.id
		)
			? searchOperationValues.reduce(
					(a, c) => [
						...a,
						c.dataTypeId === dataType.id
							? {
									...c,
									textValues: [
										...(dataType.allowMultipleTerms ? c.textValues : []),
										...textValuesArray,
									],
								}
							: c,
					],
					[]
				)
			: [
					...searchOperationValues,
					{
						dataTypeId: dataType.id,
						textValues: textValuesArray,
					},
				];

		this.props.onSearchSelection({
			searchOpValues,
		});
		this.clearSearchText();
	};

	render() {
		const {
			searchOperationValues,
			onRemoveSearchDataType,
			dataTypes,
			notFound,
		} = this.props;
		const { cursorPosition, searchText, filteredDataTypes } = this.state;

		// Todo: map this to the dataType results, to only open once some have been returned
		const isDropdownOpen = searchText.length || notFound;

		return (
			<Inner>
				{isDropdownOpen && <Overlay onClick={this.clearSearchText} />}
				<Icon aria-hidden="true">
					<IconSearch width={18} />
				</Icon>

				<Tags>
					{searchOperationValues.map(({ dataTypeId, textValues }) => {
						const dataType = dataTypes.find(dt => dt.id === dataTypeId);
						const text = `${dataType.label}: ${textValues.join(', ')}`;
						return (
							<Tag key={dataTypeId}>
								<Lozenge
									text={text}
									onLozengeRemove={() => onRemoveSearchDataType(dataType)}
								/>
							</Tag>
						);
					})}
				</Tags>

				<Form>
					<Input
						type="text"
						placeholder="Find (F1)"
						value={searchText}
						onChange={this.handleSearchInputChangeEvent}
						onKeyDown={this.handleKeyDown}
					/>

					<Button disabled={!isDropdownOpen} onClick={this.clearSearchText}>
						<IconClose width={14} />
					</Button>

					<Dropdown isActive={isDropdownOpen}>
						<Items>
							{notFound ? (
								<Item>
									<NoResult>
										<NoResultIcon>
											<IconExclamation width={20} />
										</NoResultIcon>
										Not Found
										<ItemText>{searchText}</ItemText>
									</NoResult>
								</Item>
							) : (
								filteredDataTypes.map((dataType, index) => {
									const textValuesArray = this.getTextValuesArray(
										searchText,
										dataType
									);
									return (
										<Item
											key={dataType.id}
											isActive={cursorPosition === index ? true : false}
											onClick={() => this.handleSearchSelection(dataType)}
										>
											{textValuesArray.join(', ')}
											<ItemText>in {dataType.label}</ItemText>
										</Item>
									);
								})
							)}
						</Items>
					</Dropdown>
				</Form>
			</Inner>
		);
	}
}

Search.propTypes = {
	dataTypes: PropTypes.array,
	notFound: PropTypes.bool,
	onRemoveSearchDataType: PropTypes.func,
	onSearchChange: PropTypes.func,
	onSearchSelection: PropTypes.func,
	searchOperationValues: PropTypes.array,
};

Search.defaultProps = {
	dataTypes: [],
	notFound: false,
	onRemoveSearchDataType: () => null,
	searchOperationValues: [],
};

export default Search;
