import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './styles.css';

class Lesson extends React.Component {
  state = {
    isLogoVisible: false
  };

  toggleLogo = () => {
    this.setState({
      isLogoVisible: !this.state.isLogoVisible
    });
  };

  render() {
    const { isLogoVisible } = this.state;
    return (
      <div className="wrapper">
        <div>
          <h2>Do you want to see React logo?</h2>
          <input type="radio" name="logo" checked={isLogoVisible} onChange={this.toggleLogo} />Yes
          <input type="radio" name="logo" checked={!isLogoVisible} onChange={this.toggleLogo} />No
        </div>
        <TransitionGroup>
          {isLogoVisible && (
            <CSSTransition classNames="option">
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" />
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    );
  }
}

export default Lesson;
