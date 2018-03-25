import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import ChoiceList from '../ChoiceList';
import DatePicker from '../DatePicker';
import NumberPicker from '../NumberPicker';
import Filter from '../Filter';
import FilterSearch from '../FilterSearch';
import { IconChevron } from '../Icon';
import {
	Clear,
	Content,
	FilterItem,
	Filters,
	Footer,
	Header,
	Inner,
	Item,
	ItemIcon,
	Items,
	Label,
	Nav,
	Search,
	Summary,
} from './styles';

class FilterPanel extends Component {
	state = {
		searchTerm: '',
		openFilterId: null,
		isFilterOpen: false,
		isPanelClosing: false,
	};

	getQueryElementComponent({ queryElement, operation, selectedValues }) {
		const { onFilterChange } = this.props;
		switch (queryElement.elementType) {
			case 'CHOICE_LIST':
				return (
					<ChoiceList
						isMultiChoice={queryElement.maxChoices !== 1}
						choices={queryElement.choices}
						selectedValues={selectedValues}
						onValueChange={opDelta =>
							onFilterChange({
								...operation,
								...opDelta,
							})
						}
					/>
				);
			case 'DATE_RANGE_PICKER':
				return (
					<DatePicker
						startDate={operation.start}
						endDate={operation.end}
						onDateSelectionChange={opDelta =>
							onFilterChange({
								...operation,
								...opDelta,
							})
						}
					/>
				);
			case 'NUMBER':
				return (
					<NumberPicker
						title={queryElement.title}
						minimum={queryElement.minimum}
						maximum={queryElement.maximum}
						delta={queryElement.delta}
						value={operation.value ? parseFloat(operation.value) : null}
						onValueChange={opDelta =>
							onFilterChange({
								...operation,
								...opDelta,
							})
						}
					/>
				);
			default:
				return null;
		}
	}

	closeFilterPanel = () => {
		this.setState({
			isFilterOpen: false,
		});
	};

	handleDoneClick = () => {
		// Hide filters temporarily on done click
		this.setState({
			isPanelClosing: true,
		});

		this.closeFilterPanel();
		this.props.onDoneClick();

		setTimeout(() => {
			this.setState({
				isPanelClosing: false,
			});
		}, 1000);
	};

	openFilterPanel = id => {
		this.setState({
			openFilterId: id,
			isFilterOpen: true,
		});
	};

	searchFilters = searchTerm => {
		this.setState({
			searchTerm: searchTerm,
		});
	};

	render() {
		const { filters, onClearClick } = this.props;
		const {
			openFilterId,
			isPanelClosing,
			searchTerm,
			isFilterOpen,
		} = this.state;

		return (
			<Inner>
				<Content isOpen={isFilterOpen} isPanelClosing={isPanelClosing}>
					<Nav>
						<Header>
							<Clear onClick={onClearClick}>Clear all filters</Clear>

							<Search>
								<FilterSearch handleSearchChange={this.searchFilters} />
							</Search>
						</Header>
						<Items>
							{filters.map(({ queryElement, summary, selectedValues }) => (
								<Item
									key={queryElement.id}
									onClick={() => this.openFilterPanel(queryElement.id)}
									hasFilters={selectedValues.length > 0}
									isVisible={queryElement.label
										.toLowerCase()
										.includes(searchTerm)}
								>
									<Label>{queryElement.label}</Label>

									{summary && <Summary>{summary}</Summary>}

									<ItemIcon>
										<IconChevron width={10} />
									</ItemIcon>
								</Item>
							))}
						</Items>
						<Footer>
							<Button text="Done" responsive onClick={this.handleDoneClick} />
						</Footer>
					</Nav>

					<Filters>
						{filters
							.filter(({ queryElement }) => queryElement.id === openFilterId)
							.map(({ queryElement, operation, summary, selectedValues }) => {
								return (
									<FilterItem key={queryElement.id}>
										<Filter
											onFilterTitleClick={this.closeFilterPanel}
											title={queryElement.label}
											summary={summary}
										>
											{this.getQueryElementComponent({
												queryElement,
												operation,
												selectedValues,
											})}
										</Filter>
									</FilterItem>
								);
							})}
					</Filters>
				</Content>
			</Inner>
		);
	}
}

FilterPanel.propTypes = {
	filters: PropTypes.arrayOf(
		PropTypes.shape({
			queryElement: PropTypes.object.isRequired,
			operation: PropTypes.object.isRequired,
		})
	),
	onFilterChange: PropTypes.func,
	onDoneClick: PropTypes.func,
	onClearClick: PropTypes.func,
};

FilterPanel.defaultProps = {
	filters: [],
	onFilterChange: () => null,
};

export default FilterPanel;
