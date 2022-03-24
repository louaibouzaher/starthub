import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { space } from '../../data/space'
import Fade from '@mui/material/Fade';

export function MySpaces() {
  const sp = [space, space]
  const pt = ['Judge', 'Owner', 'Participant']
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex  flex-col justify-center ">
      {sp.map((space) => {
        const p = pt[Math.floor(Math.random() * pt.length)].toString()
        return (
          <div
            className=" flex  items-start flex-row bg-white rounded shadow-lg p-10 m-2"
          >
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
              <h2 className="text-md">Position</h2>
              {p === 'Owner' && <div className="text-dark text-2xl py-8">Owner</div>}
              {p === 'Judge' && <div className="text-purple text-2xl py-8">Judge</div>}
              {p === 'Participant' && (
                <div className="text-green text-2xl py-8">Participant</div>
              )}
            </div>
            <div>
              <Button
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                ...
              </Button>
              <Menu
                id="fade-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
            
          </div>
        )
      })}
    </div>
  )
}
export default MySpaces
/**
 *             <div class="flex flex-col items-end ">
              <div class="cursor-pointer scale-125">
                <svg
                  width="21"
                  height="5"
                  viewBox="0 0 21 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 2.27778C0 3.53576 1.0198 4.55555 2.27778 4.55555C3.53576 4.55555 4.55556 3.53576 4.55556 2.27778C4.55556 1.0198 3.53576 0 2.27778 0C1.0198 0 0 1.0198 0 2.27778Z"
                    fill="#283A5A"
                  ></path>
                  <path
                    d="M10.25 4.55555C8.99202 4.55555 7.97222 3.53576 7.97222 2.27778C7.97222 1.0198 8.99202 0 10.25 0C11.508 0 12.5278 1.0198 12.5278 2.27778C12.5278 3.53576 11.508 4.55555 10.25 4.55555Z"
                    fill="#283A5A"
                  ></path>
                  <path
                    d="M18.2222 4.55555C16.9642 4.55555 15.9444 3.53576 15.9444 2.27778C15.9444 1.0198 16.9642 0 18.2222 0C19.4802 0 20.5 1.0198 20.5 2.27778C20.5 3.53576 19.4802 4.55555 18.2222 4.55555Z"
                    fill="#283A5A"
                  ></path>
                </svg>
              </div>
              <div class="text-dark flex flex-col bg-gray-100 py-4 px-6 mt-2 rounded-md shadow-md">
                <div class="cursor-pointer flex my-1">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 20V21C8.26522 21 8.51957 20.8946 8.70711 20.7071L8 20ZM4 20H3C3 20.5523 3.44772 21 4 21V20ZM4 16L3.29289 15.2929C3.10536 15.4804 3 15.7348 3 16H4ZM15.2929 4.70708L16 5.41418L16 5.41418L15.2929 4.70708ZM16.7071 4.70708L16 5.41418L16 5.41418L16.7071 4.70708ZM19.2929 7.29286L20 6.58576V6.58576L19.2929 7.29286ZM19.2929 8.70708L18.5858 7.99997L19.2929 8.70708ZM8 19H4V21H8V19ZM5 20V16H3V20H5ZM4.70711 16.7071L16 5.41418L14.5858 3.99997L3.29289 15.2929L4.70711 16.7071ZM16 5.41418L18.5858 7.99997L20 6.58576L17.4142 3.99997L16 5.41418ZM18.5858 7.99997L7.29289 19.2929L8.70711 20.7071L20 9.41418L18.5858 7.99997ZM18.5858 7.99997V7.99997L20 9.41418C20.781 8.63314 20.781 7.36681 20 6.58576L18.5858 7.99997ZM16 5.41418H16L17.4142 3.99997C16.6332 3.21892 15.3668 3.21892 14.5858 3.99997L16 5.41418Z"
                        fill="#0A1F44"
                      ></path>
                      <path
                        d="M12 8L16 12"
                        stroke="#0A1F44"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div class="mx-1"> Edit Post</div>
                </div>
                
                <div class="cursor-pointer flex my-1">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 10L14 17"
                        stroke="#0A1F44"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M10 10L10 17"
                        stroke="#0A1F44"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M6 6V5C5.44772 5 5 5.44772 5 6H6ZM18 6H19C19 5.44772 18.5523 5 18 5V6ZM6 7H18V5H6V7ZM17 6V20H19V6H17ZM17 20H7V22H17V20ZM7 20V6H5V20H7ZM7 20H7H5C5 21.1046 5.89543 22 7 22V20ZM17 20V22C18.1046 22 19 21.1046 19 20H17Z"
                        fill="#0A1F44"
                      ></path>
                      <path
                        d="M4 6H20"
                        stroke="#0A1F44"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M16 6V7C16.5523 7 17 6.55228 17 6H16ZM8 6H7C7 6.55228 7.44772 7 8 7V6ZM9 4H15V2H9V4ZM15 4V6H17V4H15ZM16 5H8V7H16V5ZM9 6V4H7V6H9ZM15 4H17C17 2.89543 16.1046 2 15 2V4ZM9 2C7.89543 2 7 2.89543 7 4H9V4V2Z"
                        fill="#0A1F44"
                      ></path>
                    </svg>
                  </div>
                  <div class="mx-1"> Leave&Delete </div>
                </div>
              </div> 
            </div>
 */