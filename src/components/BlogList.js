import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const BlogList = ({ blogs }) => (
  <ul>
    { blogs.map( (t) => {
        return ( <Blog key={t.id} {...t} /> )
      })
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { blogs: state.blogs }
}

export default connect(mapStateToProps)(BlogList)
