import React, { useState } from 'react'
import { Button } from '../Button'
import Link from 'next/dist/client/link'
import { space } from '../../data/space'
import Autocomplete from '@mui/material/Autocomplete'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

export default function StepThree({ setStep }) {
  return (
    <>
      <h2 className="font-bold text-xl">Add Prticipant</h2>

      <Autocomplete
        multiple
        id="tags-outlined"
        options={space.pariticipants}
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
        renderInput={(params) => (
          <TextField {...params} label="Select particepants" placeholder="Favorites" />
        )}
      />
    </>
  )
}
