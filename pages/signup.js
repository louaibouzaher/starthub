import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import Link from 'next/link'
import Head from 'next/head'

import WhiteLogo from '../src/assets/images/WhiteLogo'
import { Button } from '../src/components/Button'
import { signup } from '../src/store/User/user.api'
import store from '../src/store'

function Signup({ err }) {
  const router = useRouter()

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
  }

  const handleSubmit = async () => {
    try {
      store.dispatch(
        signup({
          username: state.email,
          first_name: state.firstName,
          last_name: state.lastName,
          email: state.email,
          password: state.password,
          password2: state.confirmPassword,
        })
      )
    } catch (e) {
      console.log(e)
    }
    setTimeout(() => {
      if (!err) {
        router.push('/login')
      }
    }, 1000)
  }

  useEffect(() => {
    if (state.password !== state.confirmPassword) {
      setErrors({ ...errors, passwordNotMatching: true })
    } else {
      setErrors({ ...errors, passwordNotMatching: false })
    }
  }, [state.confirmPassword, state.password])

  return (
    <>
      <Head>
        <title>Sign Up - StartHub</title>
      </Head>
      <div class="h-screen w-full text-dark bg-purple flex flex-col justify-center items-center ">
        <form>
          <div class="flex flex-col justify-center items-center bg-white px-10 py-8 rounded-xl w-full shadow-md max-w mt-10">
            <div>
              <h1 class="text-center mb-6 text-2xl  text-dark">Create An Account</h1>
              <div className="flex-row flex ">
                <div>
                  <label for="fname" class="block mb-1 text-dark ">
                    First Name
                  </label>
                  <input
                    value={state.firstName}
                    name="firstName"
                    onChange={handleChange}
                    type="text"
                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  />
                  <div className="text-red-600 text-sm h-4">
                    {errors.firstName && 'First name is required'}
                  </div>
                </div>
                <div className="px-6">
                  <label for="lname" class="block mb-1 text-dark ">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  />

                  <div className="text-red-600 text-sm h-4">
                    {errors.lastName && 'Last name is required'}
                  </div>
                </div>
              </div>
              <div className="flex-row flex mt-2">
                <div>
                  <label for="email" class="block mb-1 text-dark ">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  />

                  <div className="text-red-600 text-sm h-4 ">
                    {errors.email && 'Please enter a valid email'}
                  </div>
                </div>
              </div>
              <div className="flex-row flex mt-2">
                <div>
                  <label for="password" class="block mb-1 text-dark ">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  />
                  {errors.passwordStrength && (
                    <div className="text-red-600 text-sm ">
                      • Contains at two uppercase letters
                      <br />
                      • Contains at least 8 characters
                      <br />• Contains at least one digit
                    </div>
                  )}
                </div>
                <div className="px-6">
                  <label for="password" class="block mb-1 text-dark ">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  />
                  {errors.passwordNotMatching && (
                    <div className="text-red-600 text-sm "> Passwords not matching. </div>
                  )}
                </div>
              </div>
            </div>
            <div className=" w-60 py-1 mt-10 bg-purple rounded-md">
              <Button
                label="Create Account"
                btnStyle={' text-white tx-9xl'}
                onClick={handleSubmit}
              />
            </div>
            <div className=" mt-10 flex- ">
              <p>
                Have an Account?
                <span className="hover:text-purple px-2 ">
                  <Link href="/login">Login</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    err: state.user.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
