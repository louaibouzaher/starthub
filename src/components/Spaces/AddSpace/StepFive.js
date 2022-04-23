import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField'

export default function StepFive({ space, setSpace }) {
  const handleChange = (e) => {
    const newJudgingCritertias = [...space.judgingCriterias]
    newJudgingCritertias[parseInt(e.target.name) - 1] = e.target.value
    setSpace({
      ...space,
      judgingCriterias: newJudgingCritertias,
    })
  }
  useEffect(() => {
    setSpace({
      ...space,
      judgingCriterias: ['', '', '', '', ''],
    })
  }, [])
  return (
    <>
      <div className=" w-full min-h-fit flex flex-col">
        <h2 className="font-bold text-xl my-6 ">Add Judging Creteria Form</h2>
        <TextField
          required
          name="1"
          id="outlined-required"
          sx={{ width: '80%' }}
          className="border-2 border-dark rounded-md "
          label="Relevance"
          helperText="Exp: IS THE INTERVENTION DOING THE RIGHT THINGS?"
          value={space?.criteriaOne}
          onChange={handleChange}
        />
        <TextField
          name="2"
          required
          id="outlined-required"
          sx={{ width: '80%' }}
          className="border-2 border-dark rounded-md"
          label="Coherence"
          helperText="Exp: HOW WELL DOES THE INTERVENTION FIT?"
          value={space?.criteriaTwo}
          onChange={handleChange}
        />
        <TextField
          name="3"
          required
          id="outlined-required"
          sx={{ width: '80%' }}
          className="border-2 border-dark rounded-md"
          label="Effectiveness"
          helperText="Exp: IS THE INTERVENTION ACHIEVING ITS OBJECTIVES??"
          value={space?.criteriaThree}
          onChange={handleChange}
        />
        <TextField
          name="4"
          required
          id="outlined-required"
          sx={{ width: '80%' }}
          className="border-2 border-dark rounded-md"
          label="Effiecieny"
          helperText="Exp: HOW WELL ARE RESOURCES BEING USED?"
          value={space?.criteriaFour}
          onChange={handleChange}
        />
        <TextField
          name="5"
          required
          id="outlined-required"
          sx={{ width: '80%' }}
          className="border-2 border-dark rounded-md"
          label="Impact"
          helperText="Exp: WHAT DIFFERENCE DOES THE INTERVENTION MAKE?"
          value={space?.criteriaFive}
          onChange={handleChange}
        />
      </div>
    </>
  )
}
