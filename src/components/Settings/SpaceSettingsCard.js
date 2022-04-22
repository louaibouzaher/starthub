import React, { useState } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { connect } from 'react-redux'
import Link from 'next/link'
import Dots from '../../assets/icons/Dots'
import store from '../../store'
import Delete from '../../assets/icons/Delete'
import Box from '@mui/material/Box'
import Edit from '../../assets/icons/Edit'
import tailwindConfig from '../../../tailwind.config'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { setAddSpaceState, toggleIsEditing } from '../../store/Spaces/spaces.actions'
import AddSpace from '../Spaces/AddSpace'
import {
  changeChild,
  toggleOverlay,
} from '../../store/OverlayWindow/overlayWindow.actions'
import { deleteSpace } from '../../store/Spaces/spaces.api'
import axios from 'axios'
import { API_BASEURL } from '../../../appConfig'

function SpaceSettingsCard({
  space,
  user,
  changeChild,
  toggleOverlay,
  setAddSpaceState,
  toggleIsEditing,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleDelete = () => {
    store.dispatch(deleteSpace(space.id))
  }

  const handleEdit = async () => {
    toggleIsEditing()
    const { data } = await axios.get(`${API_BASEURL}spaces/${space.id}`)
    data.participants = data.participants.map((p) => p.user.id)
    data.judges = data.judges.map((j) => j.user.id)
    setAddSpaceState({ ...data })
    changeChild(<AddSpace space={{ ...space }} />)
    toggleOverlay()
  }

  const toggleWinners = () => {
    putSpace(space.id, {
      ...space,
      showWinners: true,
    })
  }

  return (
    <div className="relative flex w-full items-start flex-row bg-white rounded shadow-lg p-10 m-2">
      <div
        className="h-36 w-36 rounded-full mr-6"
        style={{
          backgroundImage: `url(${space?.spacePic})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="h-36  w-2/5 ml-1">
        <Link href={`/competition/${space.id}`}>
          <div className="text-2xl text-dark font-bold cursor-pointer hover:text-purple">
            {space.title}
          </div>
        </Link>
        <div className=" my-2 opacity-70">
          <span>{new Date(space.startsOn).toDateString()}</span>
          {' - '}
          <span>{new Date(space.endsOn).toDateString()}</span>
        </div>
      </div>

      <div className="flex flex-row items-center absolute right-10 top-10 ">
        <h2 className="border-2 border-dark py-1 px-2 text-sm font-bold rounded-md">
          {space.role}
        </h2>
        <React.Fragment>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Space settings">
              <IconButton
                className="bg-black"
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Dots
                  isDark
                  sx={{ width: 32, height: 32 }}
                  className={'scale-125 mt-2 rounded-full'}
                ></Dots>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 6,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem>
              <div className="cursor-pointer flex" onClick={() => toggleWinners()}>
                <Edit color={tailwindConfig.theme.extend.colors.dark} />
                <div className="mx-1">
                  {space.showWinners ? `Release Winners` : `Hide Winners`}
                </div>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem>
              <div className="cursor-pointer flex" onClick={() => handleEdit()}>
                <Edit color={tailwindConfig.theme.extend.colors.dark} />
                <div className="mx-1"> Edit Space</div>
              </div>
            </MenuItem>
            <Divider />
            <MenuItem>
              <div className="cursor-pointer flex" onClick={() => handleDelete()}>
                <Delete color={tailwindConfig.theme.extend.colors.dark} />
                <div className="mx-1"> Delete Permanently</div>
              </div>
            </MenuItem>
          </Menu>
        </React.Fragment>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    connectedUser: state.user.data.connectedUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSpace: (spaceId) => dispatch(deleteSpace(spaceId)),
    toggleOverlay: () => dispatch(toggleOverlay()),
    setAddSpaceState: (space) => dispatch(setAddSpaceState(space)),
    toggleIsEditing: () => dispatch(toggleIsEditing()),
    changeChild: (child) => dispatch(changeChild(child)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpaceSettingsCard)
