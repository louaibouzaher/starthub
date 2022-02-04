import React from 'react'

export const Button = React.forwardRef(({ action, href, btnStyle, label }, ref) => {
  return (
    <a
      href={href}
      onClick={() => (action ? action() : console.log('None'))}
      className={'cursor-pointer font-sans py-2 px-8 rounded-md ' + btnStyle}
    >
      {label}
    </a>
  )
})
