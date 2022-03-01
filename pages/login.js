import React, { useState } from 'react'
import { useRouter } from 'next/router'

import axios from 'axios'
import Head from 'next/head'
import WhiteLogo from '../src/assets/images/WhiteLogo'
import { Button } from '../src/components/Button'
import Link from 'next/link'
import { API_BASEURL } from '../appConfig'

export default function Login() {
  const router = useRouter()

  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({
    email: false,
    passwordWrong: false,
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    if (!state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setErrors({ ...errors, email: true })
      return
    } else {
      setErrors({ ...errors, email: false })
    }

    try {
      const res = await axios.post(API_BASEURL + 'auth/login/', {
        username: state.email,
        password: state.password,
      })
      console.log(res)
      if (res.status == 200) {
        router.push('/browse')
      }
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Head>
        <title>Login - StartHub</title>
      </Head>
      <div class="h-screen w-full bg-purple flex flex-col justify-center items-center ">
        <div className=" w-4.5 h-24 scale-150">
          <WhiteLogo className={' justify-center items-center '} />
        </div>

        <form>
          <div class="bg-white px-10 py-12 rounded-xl w-screen shadow-md max-w-sm">
            <div class="space-y-4">
              <h1 class="text-center text-2xl  text-black-600">Login to your account</h1>
              <div>
                <label for="email" class="block mb-1 text-gray-600 ">
                  Email
                </label>
                <input
                  value={state.email}
                  onChange={handleChange}
                  name="email"
                  type="text"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
                <div className="text-red-600 text-sm h-4 ">
                  {errors.email && 'Please enter a valid email'}
                </div>
              </div>
              <div>
                <label for="email" class="block mb-1 text-gray-600 ">
                  Password
                </label>
                <input
                  value={state.password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
            </div>

            <div className=" w-full py-1 mt-6 bg-purple rounded-md text-white">
              {/* <Link href="/browse" passHref> */}
              <Button
                label="Login"
                btnStyle={' text-white tx-2xl '}
                onClick={handleSubmit}
              />
              {/* </Link> */}
            </div>
            <div className="flex justify-center mt-10">
              <p>
                New to StartHub?{' '}
                <span className="hover:text-purple hove:text-purple px-2 ">
                  <Link href="/signup" className>
                    Sign Up
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
