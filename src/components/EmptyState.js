import React from 'react'
import { Button } from './Button'

function EmptyState({ label, onClick }) {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="my-4"> Seems empty here. 🤔</div>

      <Button
        onClick={onClick}
        label={label}
        btnStyle={
          'max-w-max bg-white border-purple border-2 text-purple w-full text-center hover:bg-purple hover:text-white'
        }
      />
    </div>
  )
}
export default EmptyState
