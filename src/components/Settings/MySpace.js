import React, { useState } from 'react'
import { connect } from 'react-redux'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { space } from '../../data/space'
import Dots from '../../assets/icons/Dots'
import store from '../../store'
import Delete from '../../assets/icons/Delete'
import Box from '@mui/material/Box'
import Edit from '../../assets/icons/Edit'
import tailwindConfig from '../../../tailwind.config'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { deleteSpace } from '../../store/Spaces/spaces.api'
import { setAddSpaceState, toggleIsEditing } from '../../store/Spaces/spaces.actions'
import {
  changeChild,
  toggleOverlay,
} from '../../store/OverlayWindow/overlayWindow.actions'
import AddSpace from '../AddSpace'

const MySpaces = ({
  user,
  spacee,
  changeChild,
  toggleOverlay,
  setAddSpaceState,
  toggleIsEditing,
}) => {
  const [isDotsListOpen, setIsDotsListOpen] = useState(false)
  const sp = [space, space]
  const pt = ['Judge', 'Owner', 'Participant']
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleDelete = () => {
    setIsDotsListOpen(false)
    store.dispatch(deleteSpace(spacee))
    sp.splice(0, 1);
  }

  const handleEdit = () => {
    setIsDotsListOpen(false)
    toggleIsEditing()
    setAddSpaceState({ ...spacee, user: user })
    changeChild(
      <AddSpace
        initialState={{ ...spacee, user: user }}
        
      />
    )
    toggleOverlay()
  }
  return (
    <div className="flex flex-col justify-center ">
      {sp.map((space) => {
        const p = pt[Math.floor(Math.random() * pt.length)].toString()

        return (
          <div className=" flex w-4/5 items-start flex-row bg-white rounded shadow-lg p-10 m-2">
            <div
              className="h-36 w-36 rounded-full mr-6"
              style={{
                backgroundImage: `url(${space.logo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="h-36  w-2/5 ml-1">
              <div className="text-4xl text-dark font-bold">{space.name}</div>
              <div className=" flex flex-row text-xl font-bold m-2">
                <div>From:</div>
                <div className="text-purple ml-4">{space.dateFrom.toDateString()}</div>
              </div>
              <div className=" flex flex-row text-xl font-bold m-2">
                <div>To:</div>
                <div className="text-purple ml-10">{space.dateTo.toDateString()}</div>
              </div>
            </div>
            <div className=" ml-5 w-1/5 text-2xl font-bold felx flex-col">
              <div className="flex flex-row">
                <h2 className="text-md">Position</h2>

                <div className="ml-4 ">
                  <React.Fragment>
                    <Box
                      sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
                    >
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
                            height: 10,
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
                        <div
                          className="cursor-pointer flex my-1"
                          onClick={() => handleEdit()}
                        >
                          <Edit color={tailwindConfig.theme.extend.colors.dark} />
                          <div className="mx-1"> Edit Space</div>
                        </div>
                      </MenuItem>
                      <Divider />
                      <MenuItem>
                        <div
                          className="cursor-pointer flex my-1"
                          onClick={() => handleDelete()}
                        >
                          <Delete color={tailwindConfig.theme.extend.colors.dark} />
                          <div className="mx-1"> Leave & Delete</div>
                        </div>
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                </div>
              </div>
              {p === 'Owner' && <div className="text-dark text-2xl py-8">Owner</div>}
              {p === 'Judge' && <div className="text-purple text-2xl py-8">Judge</div>}
              {p === 'Participant' && (
                <div className="text-green text-2xl py-8">Participant</div>
              )}
            </div>
          </div>
        )
      })}
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
    deleteSpaceSuccess: (spaceId) => dispatch(deleteSpaceSuccess(spaceId)),
    toggleOverlay: () => dispatch(toggleOverlay()),
    setAddSpaceState: (spacee) => dispatch(setAddSpaceState(spacee)),
    toggleIsEditing: () => dispatch(toggleIsEditing()),
    changeChild: (child) => dispatch(changeChild(child)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MySpaces)
