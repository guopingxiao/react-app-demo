import React, { Component, Fragment } from 'react'
import './Toggle.css'

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true
    }
    this.bindClick = this.bindClick.bind(this)
  }
  render() {
    return (  
      <Fragment>
        <p className={this.state.show ? 'show' : 'hide'}>hello world</p>
        <button onClick={this.bindClick}>切换</button>
      </Fragment>
    )
  }
  bindClick() { 
    this.setState(() => ({
      show: !this.state.show
    }))
  }
}

export default Toggle