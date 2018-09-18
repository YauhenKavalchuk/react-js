import React, { Component, Fragment } from 'react';
import './post.css';

class Post extends Component {
  state = {
    post: {},
  }

  componentDidMount() {
    const id = this.props.match.params.id || '';

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          post: data
        })
      })
  }

  render() {
    const { post } = this.state;
    const { title, body } = post;

    return (
      <Fragment>
        <h1>Post</h1>
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </Fragment>
    );
  }
};

export default Post;
