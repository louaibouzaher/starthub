import React from 'react'

export const Button = React.forwardRef(({ OnClick, href, btnStyle, label }, ref) => {
  return (
    <a
      href={href}
      onClick={() => OnClick()}
      className={'cursor-pointer font-sans py-2 px-8 rounded-md ' + btnStyle}
    >
      {label}
    </a>
  )
})
