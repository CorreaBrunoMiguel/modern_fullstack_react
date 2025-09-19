import { Fragment } from 'react/jsx-runtime'
import PropTypes from 'prop-types'

import { Post } from './Post.jsx'

export function PostList({ posts = [] }) {
  return (
    <div
      className='
        grid gap-6
        sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        p-6
        '
    >
      {posts.map((post) => (
        <Fragment key={post._id}>
          <Post {...post} />
        </Fragment>
      ))}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
}
