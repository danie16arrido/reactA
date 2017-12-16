import React, { Component } from 'react'
import NavComponent from '../components/NavComponent';

export default class NavContainer extends Component {
  render() {
    return (
      <div>
        <NavComponent update={this.props.update} links={this.props.links} />        
      </div>
    )
  }
}
