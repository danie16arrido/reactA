import React, { Component } from 'react'

export default class SearchBoxComponent extends Component {
  constructor(){
    super();
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newValues = this.props.values;
    newValues[this.props.index] = event.target.value; 
    this.props.updateValues(newValues);
    this.setState({ value: event.target.value }); 
  }
  
  handleSubmit(event) {
    this.props.update(this.props.values[this.props.index]);
    let newValues = this.props.values;
    newValues = newValues.map((x,i) => i == this.props.index ? this.state.value: '');
    this.props.updateValues(newValues);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.props.values[this.props.index]} onChange={this.handleChange} />
        </label>
        <input type="submit" value={this.props.name} />
      </form>
    )
  }
}
