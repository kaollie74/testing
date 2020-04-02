import React, { Component } from 'react';

import{connect} from 'react-redux'
import * as actions from 'actions'

class CommentBox extends Component {

  state = {
    comment: '',
  }

  handleChange = (e, propsName) => {
    let currentState = { ...this.state };
    console.log(currentState);
    currentState = e.target.value;
    this.setState({
      comment: currentState
    })
    // this.setState({
    //   ...this.state,
    //   [propsName]: e.target.value
    // })

  }

  handleSubmit = (event) => {
    event.preventDefault();
    //call an action creator
    this.props.saveComment(this.state.comment)
    // and save the commment
    this.setState({
      comment: ''
    })
  }

  render() {

    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add A Comment</h4>
        <textarea value={this.state.comment} onChange={(e) => { this.handleChange(e, 'comment') }} />
        <div>
          <button>
            Submit Comment
          </button>
        </div>
      </form>
    )
  }
}

export default connect(null, actions)(CommentBox); 