import React from 'react';
import { connect } from 'react-redux';

const Blog = ({ id, name, body, dispatch }) => (
  <li
    onClick={() => dispatch({ type: 'TOGGLE_TODO', id })}
    style={ complete ? { textDecoration: 'line-through', color: 'grey' } : {} }
  >
    {name}
  </li>
)

export default connect()(Blog)