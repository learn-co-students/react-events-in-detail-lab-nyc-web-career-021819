

import React, {Component} from 'react'



class DelayedButton extends Component {

    timeoutFunction = (event) => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }

  render(){
  return (
    <button onClick = {this.timeoutFunction}>
    I am one sexy delayed button!
    </button>
  )
  }

}




export default DelayedButton
