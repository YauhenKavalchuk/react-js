import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

const Input = ({ onChange, value, onKeyPress }) => (
  <div className="inputWrapper">
    <i className="fas fa-search" />
    <input
      className="input"
      placeholder="Click to search"
      onChange={onChange}
      onKeyPress={onKeyPress}
      value={value}
    />
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}

Input.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: ''
}

export default Input;
