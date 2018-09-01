import React, { Component } from 'react';
import PropTypes from 'prop-types';

// PropTypes

// Node:
// Component.propTypes = {
//   node: PropTypes.node,
// }
//
// // Element:
// Component.propTypes = {
//   elem: PropTypes.element,
// }
//
// // Instance Of:
// Component.propTypes = {
//   instance: PropTypes.instanceOf(Constructor),
// }
//
// // One of:
// Component.propTypes = {
//   elem: PropTypes.oneOf(['va1', 'val2']),
// }
//
// // One of type:
// Component.propTypes = {
//   elem: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.number,
//   ]),
// }
//
// // Array of / Object of:
// Component.propTypes = {
//   array: PropTypes.arrayOf(PropTypes.string),
//   object: PropTypes.objectOf(PropTypes.number),
// }
//
// // Shape:
// Component.propTypes = {
//   obj: PropTypes.shape({
//     color: PropTypes.string,
//     fontSize: PropTypes.number,
//     lineHeight: PropTypes.number,
//   }),
// }

// =============================================

export const Counter = ({ counter = 0 }) => {
  return <h1>{`Counter component. Counter value is: ${counter}`}</h1>
}

export const Button = () => (
  <button>Simple button</button>
)

export class Lesson extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  static defultProps = {
    children: null,
  }

  state = {
    counter: 0,
  }

  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: ++counter,
    }))
  }

  render() {
    const { counter } = this.state;
    const { children, child } = this.props;

    return (
      <div>
        {child}
        <div>{counter}</div>
        {React.cloneElement(children, {counter: this.state.counter})}
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}
