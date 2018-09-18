import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './posts.css';

class Posts extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(res => res.json())
      .then(data => {
        this.setState({
          data
        })
      })
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <h1>Posts:</h1>
        <ul className="posts">
          {data.map(({ id, title }) =>
            <li key={id}><Link to={`/posts/${id}`}>{title}</Link></li>
          )}
        </ul>
      </div>
    );
  }
};

export default Posts;
