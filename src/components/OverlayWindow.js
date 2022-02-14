import React, { useEffect } from 'react'
import { Button } from './Button'

export default function OverlayWindow({ children, isOpen, setIsOpen }) {
  useEffect(() => {}, [isOpen])

  return (
    <div
      className={
        'bg-black bg-opacity-40 z-50 w-full h-screen flex justify-center items-center ' +
        (isOpen ? 'fixed' : 'hidden')
      }
    >
      <div
        className="relative bg-white rounded-xl shadow-xl w-1/2 p-8 pb-24"
        style={{
          minHeight: 200,
        }}
      >
        <div onClick={() => setIsOpen(false)}>Temporary Close</div> {children}
      </div>
    </div>
  )
}
