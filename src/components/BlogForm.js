import React from 'react';
import { connect } from 'react-redux';

class BlogForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { name } = this.state
    const blog = { name, id }
    dispatch({ type: 'ADD_BLOG', blog: name })
    dispatch({ type: 'INC_ID' })
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state

    return (
      <div>
        <h3>Add A Blog Post</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);

