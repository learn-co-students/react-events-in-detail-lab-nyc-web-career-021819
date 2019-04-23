// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{

handleMouse = event => {
  let mouseCoordinates = [event.clientX, event.clientY]
  return this.props.onReceiveCoordinates(mouseCoordinates)
}

  render(){
    return(<button onClick = {this.handleMouse}>CoordinatesButton</button>)
  }
}
export default CoordinatesButton
