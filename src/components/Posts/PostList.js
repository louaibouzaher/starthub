import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import store from '../../store'
import { getPosts } from '../../store/Posts/posts.api'

function PostList({ posts }) {
  useEffect(() => {
    store.dispatch(getPosts())
  }, [])

  return posts?.map((p) => (
    <Post
      key={p.id}
      post={p}
      user={{
        id: p.owner?.id,
        firstName: p.owner?.first_name,
        lastName: p.owner?.last_name,
        avatar: p.profile?.profilePic,
      }}
    />
  ))
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
