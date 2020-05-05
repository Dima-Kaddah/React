import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { Count: 0 };
  }

  setCount = () => {
    this.setState({ ...this.state, Count: this.state.Count + 1 });
  };
  resetCount = () => {
    this.setState({ Count: 0 });
  };

  render() {
    return (
      <div className="Counter">
        <button onClick={this.setCount} className="plus">
          +
        </button>
        <h1>{this.state.Count}</h1>
        <button onClick={this.resetCount} className="rest">
          Rest
        </button>
      </div>
    );
  }
}
export default Counter;
