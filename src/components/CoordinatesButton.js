
import React, {Component} from 'react'



class CoordinatesButton extends Component {


 makeCoordinateArray = (event) => {
   let startArray = [];
   startArray.push(event.clientX);
   startArray.push(event.clientY);


   return this.props.onReceiveCoordinates(startArray)
 }


  render() {
  return <button onClick = {this.makeCoordinateArray}> I am one sexy coordinates button! </button>

  }

}




export default CoordinatesButton
