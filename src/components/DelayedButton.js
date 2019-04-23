// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
	handleDelayedClick = (e) => {
		e.persist();
		console.log(this.props.delay);
		console.log(e);
		return setTimeout(this.props.onDelayedClick, this.props.delay, e);
	};

	render() {
		return <button onClick={this.handleDelayedClick}>delayClick</button>;
	}
}

export default DelayedButton;
