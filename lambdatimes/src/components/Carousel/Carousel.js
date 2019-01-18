import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carouselData: [],
			num: 0,
		};
	}
	componentDidMount() {
		this.setState({ carouselData: carouselData });
	}

	leftClick = e => {
		e.preventDefault();
		if (this.state.num === 0) {
			this.setState({ num: this.state.carouselData.length - 1 });
		} else if (this.state.num <= this.state.carouselData.length - 1) {
			this.setState(prevState => ({
				num: --prevState.num,
			}));
		}
	};

	rightClick = e => {
		e.preventDefault();
		if (this.state.num === this.state.carouselData.length - 1) {
			this.setState({ num: 0 });
		} else if (this.state.num < this.state.carouselData.length - 1) {
			this.setState(prevState => ({
				num: ++prevState.num,
			}));
		}
	};

	// rightClick = e => {
	// 	e.preventDefault();
	// 	if (this.state.num < this.state.carouselData.length - 1) {
	// 		this.setState(
	// 			prevState => (
	// 				{
	// 					num: ++prevState.num,
	// 				},
	// 				console.log(this.state.num)
	// 			)
	// 		);
	// 	} else if (this.state.num === this.state.carouselData.length - 1) {
	// 		this.setState({ num: 0 }, console.log(this.state.num));
	// 	}
	// };

	selectedImage = () => {
		return (
			<img
				src={this.state.carouselData[this.state.num]}
				style={{ display: 'block' }}
				alt="carousel"
			/>
		);
	};

	render() {
		return (
			<div className="carousel">
				<div className="left-button" onClick={e => this.leftClick(e)}>
					{'<'}
				</div>
				{this.selectedImage()}
				<div className="right-button" onClick={e => this.rightClick(e)}>
					{'>'}
				</div>
			</div>
		);
	}
}
