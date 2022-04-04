import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Project from './Project'
import store from '../store'
import { getProjects } from '../store/Projects/projects.api'



function ProjectList ({projects})  {

    useEffect(() => {
        store.dispatch(getProjects())
      }, [])

    return (
      projects?.map((p) => (
        <Project
          project={p}
          user={{
            id: p.owner?.id,
            firstName: p.owner?.first_name,
            lastName: p.owner?.last_name,
            avatar: p.profile?.profilePic,
            position: p.profile?.position,
          }}
        />
      ))
    )
}

const mapStateToProps = (state) => {
    return {
      projects: state.projects.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      changeChild: (newChild) => dispatch(changeChild(newChild)),
      sectionsInit: (sections) => dispatch(sectionsInit(sections)),
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)