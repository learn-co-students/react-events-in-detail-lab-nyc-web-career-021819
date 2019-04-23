// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

  click = (e) => {
    return this.props.onReceiveCoordinates([e.screenX, e.screenY])
  }

  render() {
    return (
      <button onClick={this.click}>Click</button>
    )
  }

}
