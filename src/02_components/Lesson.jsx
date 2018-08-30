import React, { Component } from 'react';

function Welcome() {
  return <h1>Hello world!</h1>
}

class SuperWelcome extends Component {
  render() {
    return <h1>Hello world!</h1>
  }
}

function Lesson() {
  return(
    <div>
      <Welcome />
      <SuperWelcome />
    </div>
  )
}

export default Lesson;
