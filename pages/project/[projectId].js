import { useRouter } from 'next/router'
import { connect } from 'react-redux'

import { connectedUser } from '../../src/data/user'
import { Navbar } from '../../src/components/Navbar'
import { Button } from '../../src/components/Button'
import UserAvatar from '../../src/assets/images/UserAvatar'

const Project = ({}) => {
  const router = useRouter()
  const { projectId } = router.query

  return (
    <>
      <Navbar isConnected connectedUser={connectedUser} />
      <div className="h-screen w-full flex flex-col justify-start items-start pt-28 p-20">
        {projectId}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
