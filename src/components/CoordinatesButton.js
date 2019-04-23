// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {
	handleClick = (e) => {
		const x = e.clientX;
		const y = e.clientY;
		const array = [ x, y ];
		// console.log(array);

		return this.props.onReceiveCoordinates(array);
	};
	render() {
		return <button onClick={this.handleClick}>click me</button>;
	}
}

export default CoordinatesButton;
