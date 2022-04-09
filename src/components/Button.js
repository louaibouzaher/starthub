import React from 'react'

export const Button = React.forwardRef(
  ({ onClick, href, btnStyle, label, Icon, rightIcon }, ref) => {
    return (
      <a
        href={href}
        onClick={onClick}
        className={
          'font-bold flex justify-center items-center cursor-pointer font-sans py-2 px-6 rounded-md text-sm ' +
          btnStyle
        }
      >
        {rightIcon && Icon && <Icon />}
        {label}
        {!rightIcon && Icon && <Icon />}
      </a>
    )
  }
)
