
import React, { Component } from 'react';
import "../style.css";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, body } = this.state;

    // Make a POST request to the JSON server
    fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Post created:', data);
        // Optionally, update your component's state or perform any other actions
      });
  };

  render() {
    return (
      <div>
        <h2>Create a Post</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Body:</label>
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Create Post</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
