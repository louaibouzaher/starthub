import React, { useState } from 'react'
import { Button } from '../Button'

import { space as participants } from '../../data/space'
import Autocomplete from '@mui/material/Autocomplete'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField'

export default function StepThree({ setSpace, space }) {
  console.log(participants)
  return (
    <>
      <h2 className="font-bold text-xl">Add Prticipant</h2>

      <Autocomplete
        multiple
        id="tags-outlined"
        options={participants.pariticipants}
        onChange={(e) => {
          // Add Participants here
        }}
        getOptionLabel={(option) => option.firstName + option.lastName}
        sx={{ width: '50%' }}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              class=" rounded-full border-2 border-white shadow-md"
              loading="lazy"
              width="40"
              src={option.picture}
            />
            {option.firstName} {option.lastName}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Select participants" />}
      />
    </>
  )
}
