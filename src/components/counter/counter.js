import React from 'react';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue
    };
  }

  decrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  }

  increment = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  }

  render() {
    return React.createElement('div', null,
      React.createElement('span', null, 'Value: ', this.state.value),
      React.createElement('button', { onClick: this.decrement }, 'Decrement'),
      React.createElement('button', { onClick: this.increment }, 'Increment')
    );
  }
}

export default Counter;

