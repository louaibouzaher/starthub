import React, { useState } from 'react'
import { styled } from '@mui/system'
import SwitchUnstyled, { switchUnstyledClasses } from '@mui/base/SwitchUnstyled'
import tailwindConfig from '../../../tailwind.config'

const grey = {
  400: '#BFC7CF',
  500: '#AAB4BE',
  600: '#6F7E8C',
}

const Root = styled('span')(
  ({ theme }) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
    border-radius: 10px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 14px;
    height: 14px;
    top: 3px;
    left: 3px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    transition: all 200ms ease;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 22px;
      top: 3px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${tailwindConfig.theme.extend.colors.purple};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `
)

export default function PlatformPreferences() {
  const [state, setState] = useState({
    darkTheme: false,
    newsletterSubscription: false,
  })
  const handleChange = (field) => {
    setState({ ...state, [field]: !state[field] })
  }
  return (
    <div className="text-dark text-lg w-full flex flex-col justify-start items-start py-10">
      <div className="w-full flex justify-start items-center">
        <div className="mx-4">Dark Theme</div>
        <SwitchUnstyled
          component={Root}
          checked={state.darkTheme}
          onChange={() => handleChange('darkTheme')}
        />
      </div>
      <div className="w-full flex justify-start items-center">
        <div className="mx-4">Subscribe to Newsletter</div>
        <SwitchUnstyled
          component={Root}
          checked={state.newsletterSubscription}
          onChange={() => handleChange('newsletterSubscription')}
        />
      </div>
    </div>
  )
}
