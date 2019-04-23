// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {

    handleCoordinatesClick = (e) => {
        return this.props.onReceiveCoordinates([e.screenX, e.screenY])
    }
    render() {
        return (
            
            <button onClick={this.handleCoordinatesClick}></button>
        )
    }
}

// onClick={this.props.onReceiveCoordinates(this.coordinates)}