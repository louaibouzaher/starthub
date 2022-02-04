import React from 'react'

export const Button = ({ label, goTo, btnStyle, onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      to={goTo}
      className={'cursor-pointer font-sans py-2 px-8 rounded-md ' + btnStyle}
    >
      {label}
    </div>
  )
}
