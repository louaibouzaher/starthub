import React from 'react'

export const Button = React.forwardRef(
  ({ onClick, href, btnStyle, label, Icon, rightIcon }, ref) => {
    return (
      <a
        href={href}
        onClick={() => onClick()}
        className={
          ' flex justify-center items-center cursor-pointer font-sans py-2 px-8 rounded-md ' +
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
