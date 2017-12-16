import React, { Component } from 'react'
import DisplayComponent from '../components/DisplayComponent';

export default class DisplayContainer extends Component {
  render() {
    return (
      <div>
        <DisplayComponent data={this.props.data}/>                 
      </div>
    )
  }
}

