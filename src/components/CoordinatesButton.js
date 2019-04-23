import React from 'react'

class CoordinatesButton extends React.Component {

  wasClicked = (event) => {
    const arr = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return (
      <button onClick={this.wasClicked}>Coordinates Button</button>
    )
  }

}
export default CoordinatesButton
