// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

    handleDelayClick = (e) => {
        e.persist()
        return setTimeout(this.props.onDelayedClick, this.props.delay, e)
    }

    render() {
        return (
            <button onClick={this.handleDelayClick}></button>
        )
    }
}