// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  
  eventHandler = (event) => {
    let location = []
    location.push(event.clientX)
    location.push(event.clientY)

      // console.log(event.clientX)
    return this.props.onReceiveCoordinates(location)
  }

  render() {
    return (
        <button onClick={this.eventHandler}>This is the Button</button>
    );
  }
}

export default CoordinatesButton;
