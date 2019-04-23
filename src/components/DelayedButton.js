import React, { Component } from 'react';

class DelayedButton extends Component{

handleDelayedClick =event =>{
  event.persist();
 setTimeout(() => {
    this.props.onDelayedClick(event)
  }, this.props.delay)

}

render(){
 return (<button onClick={this.handleDelayedClick}>DelayedButton</button>)
}
}
export default DelayedButton;
