import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import HeaderContainer from './HeaderContainer';
import NavContainer from './NavContainer';
import DisplayContainer from './DisplayContainer';

export default class MainContainer extends Component {
  constructor(){
    super();
    this.state = {
      displayData: "display DAta",
      searches: ["Find PDP", "Find PLP", "Find Store"]
    };
    this.updateDisplayData = this.updateDisplayData.bind(this);
  }
  updateDisplayData(payload){
    this.setState({displayData:payload});
  }
  render() {
    return (
      <div>
        <HeaderContainer />         
        <NavContainer update={this.updateDisplayData} links={this.state.searches}/>
        <DisplayContainer data={this.state.displayData}/>
      </div>
    )
  }
}

if (document.getElementById('app')) {
  ReactDOM.render(<MainContainer />, document.getElementById('app'));
}
