import Head from 'next/head'
import WhiteLogo from '../src/assets/images/WhiteLogo'
import { Button } from '../src/components/Button'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - StartHub</title>
      </Head>
      <div class="h-screen w-full bg-purple flex flex-col justify-center font-inter items-center ">
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
                  type="text"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <label for="email" class="block mb-1 text-gray-600 ">
                  Password
                </label>
                <input
                  type="password"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
            </div>

            <div className=" w-full py-1 mt-6 bg-purple rounded-md text-white">
              <Link href="/browse" passHref>
                <Button
                  label="Login"
                  btnStyle={' text-white tx-2xl '}
                  onClick={() => {
                    console.log('Login')
                  }}
                />
              </Link>
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
