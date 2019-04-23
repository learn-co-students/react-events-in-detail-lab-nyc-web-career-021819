// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component{

  constructor(props){
    super()
    console.log(props)
  }


  render(){
    return <button onClick={this.handleClick}>Delay Click Button</button>
  }

  handleClick = (e) => {
    e.persist()
    setTimeout(()=>this.props.onDelayedClick(e),this.props.delay)
  }

}
