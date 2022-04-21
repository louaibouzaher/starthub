import React, { useEffect, useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import { Box } from '@mui/system'
import TextField from '@mui/material/TextField'
import { ListUsers } from './ListUsers'

export default function StepThree({ setSpace, space, users }) {
  const handleParticipants = (e, newValue) => {
    setSpace({ ...space, participants: newValue.map((p) => p.user.id) })
  }

  return (
    <>
      <h2 className="font-bold text-xl my-6">Add Prticipants</h2>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={users}
        onChange={handleParticipants}
        getOptionLabel={(option) => `${option.user.first_name} ${option.user.last_name}`}
        sx={{ width: '100%' }}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              class=" rounded-full border-2 border-white shadow-md"
              loading="lazy"
              width="40"
              src={option.profilePic}
            />
            {option.user.first_name} {option.user.last_name}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Select Participants" />}
      />
      {/* <ListUsers
        label="Already participants in this competition"
        list={space.participants}
      /> */}
    </>
  )
}
