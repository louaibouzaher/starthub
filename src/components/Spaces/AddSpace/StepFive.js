import React, { useState } from 'react'
import TextField from '@mui/material/TextField'

export default function StepFive({ space, handleChange }) {
  const [errors, setErrors] = useState({
    spaceCreteriaOne: false,
    spaceCreteriaTwo: false,
    spaceCreteriaThree: false,
    spaceCreteriaFour: false,
    spaceCreteriaFive: false,
  })

  return (
    <>
      <div className=" w-full min-h-fit flex flex-col">
        <h2 className="font-bold text-xl my-6 ">Add Juding Creteria Form</h2>
        <TextField
          required
          id="outlined-required"
          sx={{ width: '80%' }}
          className="border-2 border-dark rounded-md "
          label="Relevance"
          helperText="Exp: IS THE INTERVENTION DOING THE RIGHT THINGS?"
          value={space.spaceCreteriaOne}
          onInputChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          sx={{ width: '80%' }}
          className="border-2 border-dark rounded-md"
          label="Coherence"
          helperText="Exp: HOW WELL DOES THE INTERVENTION FIT?"
          value={space.spaceCreteriaTwo}
          onInputChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          sx={{ width: '80%' }}
          className="border-2 border-dark rounded-md"
          label="Effectiveness"
          helperText="Exp: IS THE INTERVENTION ACHIEVING ITS OBJECTIVES??"
          value={space.spaceCreteriaThree}
          onInputChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          sx={{ width: '80%' }}
          className="border-2 border-dark rounded-md"
          label="Effiecieny"
          helperText="Exp: HOW WELL ARE RESOURCES BEING USED?"
          value={space.spaceCreteriaFour}
          onInputChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          sx={{ width: '80%' }}
          className="border-2 border-dark rounded-md"
          label="Impact"
          helperText="Exp: WHAT DIFFERENCE DOES THE INTERVENTION MAKE?"
          value={space.spaceCreteriaFive}
          onInputChange={handleChange}
        />
      </div>
    </>
  )
}
