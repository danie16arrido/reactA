import React, { Component } from 'react'
import SearchBoxComponent from './SearchBoxComponent';

export default class NavComponent extends Component {
  constructor(){
    super();
    this.state={
      boxesValues:[]
    };
    this.updateValues = this.updateValues.bind(this);
  }
  
  componentWillMount(){
    this.setState({boxesValues:
      Array((this.props.links).length).fill('')
    })
  }
  
  updateValues(values){
    this.setState({boxesValues: values});
  }

  render() {
    return (
      <div>
        {Object.keys(this.props.links).map((i) => (
          <SearchBoxComponent 
            key={i} 
            name={this.props.links[i]}
            index={i} 
            update={this.props.update} 
            updateValues={this.updateValues}
            values={this.state.boxesValues}
            />
            )
          )
        }
      </div>
    )
  }
}
