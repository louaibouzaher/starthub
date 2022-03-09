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
      <div className="flex flex-col ">
        <form>
          <div class="flex flex-col justify-center items-center bg-white px-10 py-8 border-2 border-dark rounded-xl w-full shadow-md max-w mt-10">
            <div>
              <h1 class="text-center mb-6 text-2xl font-bold  text-dark">
                Create Your Own Space
              </h1>
              <h2 className="font-bold text-xl">Add Prticipant:</h2>
              <Stack spacing={2} sx={{ width: 300, margin:2 }}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={space.pariticipants}
                  getOptionLabel={(option) => option.firstName + option.lastName}
                  sx={{ width: '95%' }}
                  renderOption={(props, option) => (
                    <Box
                      component="li"
                      sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      <img class=" rounded-full border-2 border-white shadow-md" loading="lazy" width="40" src={option.picture} alt="" />
                      {option.firstName} {option.lastName}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Select particepants"
                      placeholder="Favorites"
                    />
                  )}
                />
              </Stack>
            </div>
            <div className=" flex flex-row w-fit py-5">
              <Link href="/">
                <Button label="Cancel" btnStyle={'border-2 border-dark mx-2 w-fit'} />
              </Link>
              <Button
                label="Previous"
                btnStyle="bg-white text-purple border-2 border-purple"
                onClick={() => setStep(0)}
              />

              <Button
                label="Next"
                btnStyle="bg-purple text-white border-2 border-purple mx-2"
                onClick={() => setStep(3)}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
