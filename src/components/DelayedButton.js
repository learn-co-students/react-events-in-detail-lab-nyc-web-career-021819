// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {

  click = (e) => {
    e.persist() // pools the data
    setTimeout(() => {  //creating a set Timeout
      this.props.onDelayedClick(e)  //invoke the onDelayedClick function
    }, this.props.delay) //this.props.delay is the amount of time for delay
  }

  render() {
    return(
      <button onClick={this.click}></button>
    )
  }


}
