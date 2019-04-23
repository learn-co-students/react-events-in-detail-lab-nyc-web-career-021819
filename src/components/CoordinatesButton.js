// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component{

  constructor(props){
    super(props)
    console.log(props)
  }

  onButtonClick = (event) => {
    event.persist()
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return <button onClick={this.onButtonClick}>Coordinates Button</button>
  }
}
