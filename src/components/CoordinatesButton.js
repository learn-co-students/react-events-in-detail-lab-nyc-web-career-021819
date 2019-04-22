// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  createElementArray = event => {
    // console.log(event.clientX)
    // console.log(event.clientY)
    // console.log([event.clientX, event.clientY])
    const coordArray =  [event.clientX, event.clientY]
 
    return this.props.onReceiveCoordinates(coordArray)
  }
  render () {
    return <button onClick={this.createElementArray}>COORD BUTTON</button>;
  }
}
// this.props.onReceiveCoordinates(
