import React, { useState } from 'react'

import Head from 'next/head'
import WhiteLogo from '../src/assets/images/WhiteLogo'
import { Button } from '../src/components/Button'
import Link from 'next/link'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

export default function Signup() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    passwordStrength: false,
    passwordNotMatching: false,
  })

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'firstName':
        if (!e.target.value.match(/^[a-z ,.'-]+$/i)) {
          setErrors({ ...errors, firstName: true })
        } else {
          setErrors({ ...errors, firstName: false })
        }
        break
      case 'lastName':
        if (!e.target.value.match(/^[a-z ,.'-]+$/i)) {
          setErrors({ ...errors, lastName: true })
        } else {
          setErrors({ ...errors, lastName: false })
        }
        break
      case 'email':
        if (!e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
          setErrors({ ...errors, email: true })
        } else {
          setErrors({ ...errors, email: false })
        }
        break
      case 'password':
        if (!e.target.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
          setErrors({ ...errors, passwordStrength: true })
        } else {
          setErrors({ ...errors, passwordStrength: false })
        }
        break


      default:
        break
    }

    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
    console.log(state)
  }

  return (
    <>
      <Head>
        <title>Sign Up - StartHub</title>
      </Head>
      <div class="h-screen w-full bg-gradient-to-br from-blue-600 to-indigo-600 flex flex-col justify-center items-center ">
        <div className=" w-4.5 h-12 scale-150">
          <WhiteLogo className={' justify-center items-center  '} />
        </div>

        <form>
          <div class="bg-white px-10 py-8 rounded-xl w-full shadow-md max-w">
            <div>
              <h1 class="text-center space-y-4 text-2xl font-semibold text-black-600">
                Create An Account
              </h1>
              <div className="flex-row flex ">
                <div>
                  <label for="fname" class="block mb-1 text-gray-600 font-semibold">
                    First Name
                  </label>
                  <input
                    value={state.firstName}
                    name="firstName"
                    onChange={handleChange}
                    type="text"
                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  />
                  {errors.firstName && (
                    <div className="text-red-600"> Name is Required </div>
                  )}
                </div>
                <div className="px-6">
                  <label for="lname" class="block mb-1 text-gray-600 font-semibold">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  />
                  {errors.firstName && (
                    <div className="text-red-600">Name is Required </div>
                  )}
                </div>
              </div>
              <div className="flex-row flex ">
                <div>
                  <label for="email" class="block mb-1 text-gray-600 font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  />
                  {errors.email && (
                    <div className="text-red-600"> Please enter a valid email </div>
                  )}
                </div>
                <div className="px-8">
                  <FormControl>
                    <FormLabel className=" demo-row-radio-buttons-group-label text-gray-600">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="female"
                        control={<Radio />}
                        label="Female"
                      />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
              <div className="flex-row flex ">
                <div>
                  <label for="password" class="block mb-1 text-gray-600 font-semibold">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  />
                  {errors.passwordStrength && (
                    <div className="text-red-600">
                      <pre>
                        -Two UpperCase Letters<br></br>-At least 8 characters <br></br>
                        -Contain Number
                      </pre>
                    </div>
                  )}
                </div>
                <div className="px-6">
                  <label for="password" class="block mb-1 text-gray-600 font-semibold">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                    placeholder="Enter again to validate"
                  />
                </div>
              </div>
            </div>
            <div className=" ml-28 w-60 py-1 mt-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-md">
              <Link href="/login" passHref>
                <Button
                  label="Create Account"
                  btnStyle={' text-white tx-9xl tracking-wide'}
                  onClick={() => {
                    console.log('Create Account')
                  }}
                />
              </Link>
            </div>
            <div className="ml-36 mt-10 ">
              <p>
                Have an Account?
                <span className="hover:text-blue-900 font-semibold active:text-blue-400 px-2 ">
                  <Link href="/login" className>
                    Sign In
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
