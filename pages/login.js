import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import Head from 'next/head'
import WhiteLogo from '../src/assets/images/WhiteLogo'
import { Button } from '../src/components/Button'
import Link from 'next/link'
import { login, refreshToken } from '../src/store/User/user.api'
import store from '../src/store'

function Login({ token, isConnected }) {
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

  const handleKeyPress = (e) => {
    if (e.key == 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    if (!state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setErrors({ ...errors, email: true })
      return
    } else {
      setErrors({ ...errors, email: false })
    }
    await store.dispatch(
      login({
        username: state.email,
        password: state.password,
      })
    )
  }

  useEffect(() => {
    if (isConnected) {
      router.push('/feed')
    }
  }, [isConnected])

  return (
    <>
      <Head>
        <title>Login - StartHub</title>
      </Head>
      <div class="h-screen w-full bg-purple flex flex-col justify-center items-center ">
        <form>
          <div className="bg-white px-10 py-12 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-4">
              <h1 className="text-center text-2xl  text-black-600">
                Login to your account
              </h1>
              <div>
                <label for="email" className="block mb-1 text-gray-600 ">
                  Email
                </label>
                <input
                  value={state.email}
                  onChange={handleChange}
                  name="email"
                  type="text"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  onKeyPress={handleKeyPress}
                />
                <div className="text-red-600 text-sm h-4 ">
                  {errors.email && 'Please enter a valid email'}
                </div>
              </div>
              <div>
                <label for="email" className="block mb-1 text-gray-600 ">
                  Password
                </label>
                <input
                  value={state.password}
                  onChange={handleChange}
                  name="password"
                  type="password"
                  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                  onKeyPress={handleKeyPress}
                />
                <div className="text-red-600 text-sm h-4 ">
                  {errors.passwordWrong && 'Wrong password'}
                </div>
              </div>
            </div>

            <div className=" w-full py-1 mt-6 bg-purple rounded-md text-white">
              <Button
                label="Login"
                btnStyle={' text-white tx-2xl '}
                onClick={() => handleSubmit()}
              />
            </div>
            <div className="flex justify-center mt-10">
              <p>
                New to StartHub?{' '}
                <span className="hover:text-purple hove:text-purple px-2 ">
                  <Link href="/signup" className>
                    Signup
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

const mapStateToProps = (state) => {
  return {
    token: state.user.data.token,
    isConnected: state.user.isConnected,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
