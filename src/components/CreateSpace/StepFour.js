import React, { useState } from 'react'
import { Button } from '../Button'
import Link from 'next/dist/client/link'
import { space } from '../../data/space'
import Autocomplete from '@mui/material/Autocomplete'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

export default function StepFour({ setStep }) {
  return (
    <>
      <h2 className="font-bold text-xl">Add Judges</h2>

      <Autocomplete
        multiple
        id="tags-outlined"
        options={space.judges}
        getOptionLabel={(option) => option.firstName + option.lastName}
        sx={{ width: '50%' }}
        renderOption={(props, option) => (
          <div class="flex items-center">
            <div>
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                <img
                  class=" rounded-full border-2 border-white shadow-md"
                  loading="lazy"
                  width="50"
                  src={option.picture}
                  alt=""
                />
              </Box>
            </div>
            <div class="mx-2 text-dark">
              <div>
                {option.firstName} {option.lastName}
              </div>
              <div class="font-bold text-sm">{option.experience}</div>
            </div>
          </div>
        )}
        renderInput={(params) => (
          <TextField {...params} label="Select judges" placeholder="Favorites" />
        )}
      />
    </>
  )
}
