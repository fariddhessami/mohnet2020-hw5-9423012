import React, { Component } from 'react';
class ThisInReact1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfClicks: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('From handleClick()', this);
    // console.log(this.state.numOfClicks);
    // this.state.numOfClicks = this.state.numOfClicks + 1;
    // console.log(this.state.numOfClicks);
    this.setState({ numOfClicks: this.state.numOfClicks + 1 });
  }
  render() {
    console.log('From render()', this);
    return (
      <div>
        <button onClick={this.handleClick}>Click Me!</button>
        <p>Number of Times Clicked = {this.state.numOfClicks}</p>
      </div>
    );
  }
}
export default ThisInReact1;
