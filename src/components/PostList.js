import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Post from './Post'
import store from '../store'
import { getPosts } from '../store/Posts/posts.api'



function PostList ({posts})  {

    useEffect(() => {
        store.dispatch(getPosts())
      }, [])

    return (
        posts?.map((p) => (
            <Post
              post={p}
              user={{
                id: p.owner?.id,
                firstName: p.owner?.first_name,
                lastName: p.owner?.last_name,
                avatar: p.profile?.profilePic,
              }}
            />
          ))
    )
}

const mapStateToProps = (state) => {
    return {
      posts: state.posts.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      changeChild: (newChild) => dispatch(changeChild(newChild)),
      sectionsInit: (sections) => dispatch(sectionsInit(sections)),
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(PostList)