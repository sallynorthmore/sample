import React from 'react';
import PropTypes from 'prop-types';
// import { IconChevron } from '../Icon';
import {
	Inner,
	Slides,
	Slide,
	SlideInner,
	Track,
	Navigation,
	NavButton,
	Progress,
	ProgressButton,
} from './styles';

class Carousel extends React.Component {
	state = {
		activeIndex: 0,
		renderedWidth: 0,
	};

	componentDidMount() {
		this.updateWidth();
		window.addEventListener('resize', this.updateWidth);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWidth);
	}

	onNavClick = direction => {
		const { children } = this.props;
		const { activeIndex } = this.state;

		this.setState({
			activeIndex:
				(activeIndex + children.length + direction) % children.length,
		});
	};

	goToSlide = index => {
		this.setState({
			activeIndex: index,
		});
	};

	updateWidth = () => {
		this.setState({
			renderedWidth: this.carouselDOM.offsetWidth,
		});
	};

	render() {
		const { children, width, responsive } = this.props;
		const { activeIndex, renderedWidth } = this.state;
		const carouselWidth = responsive ? '100%' : `${width}px`;
		const currentWidth = responsive ? renderedWidth : width;
		const slideWidth = currentWidth;
		const trackWidth = `${currentWidth * children.length}px`;
		const trackPosition = `-${currentWidth * activeIndex}px`;

		return (
			<Inner
				innerRef={elem => {
					this.carouselDOM = elem;
				}}
			>
				<Slides width={carouselWidth}>
					<Track width={trackWidth} position={trackPosition}>
						{children.map((item, index) => (
							<Slide
								key={index}
								width={slideWidth}
								active={activeIndex === index}
								position={slideWidth * index}
							>
								<SlideInner width={slideWidth}> {item}</SlideInner>
							</Slide>
						))}
					</Track>
				</Slides>
				<Navigation active={children.length > 1}>
					<NavButton onClick={() => this.onNavClick(-1)} previous>
						{/* <IconChevron width={24} /> */}
					</NavButton>
					<Progress>
						{children.map((item, index) => (
							<ProgressButton
								key={index}
								onClick={() => this.goToSlide(index)}
								active={activeIndex === index}
							/>
						))}
					</Progress>
					<NavButton onClick={() => this.onNavClick(1)}>
						{/* <IconChevron width={24} /> */}
					</NavButton>
				</Navigation>
			</Inner>
		);
	}
}

Carousel.defaultProps = {
	children: [],
	responsive: true,
	width: 540,
};

Carousel.propTypes = {
	children: PropTypes.array.isRequired,
	responsive: PropTypes.bool.isRequired,
	width: PropTypes.number,
};

export default Carousel;
