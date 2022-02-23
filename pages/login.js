import Head from 'next/head'
import { Button } from '../src/components/Button'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - StartHub</title>
      </Head>
      <div class="h-screen bg-gradient-to-br from-blue-600 to-indigo-600 flex justify-center items-center w-full">
        <form>
          <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div class="space-y-4">
              <h1 class="text-center text-2xl font-semibold text-black-600">
                StartHub Login
              </h1>
              <div>
                <label for="email" class="block mb-1 text-gray-600 font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
              <div>
                <label for="email" class="block mb-1 text-gray-600 font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"
                />
              </div>
            </div>

            <div>
              <Link href="/browse" passHref>
                <Button
                  label="Login"
                  btnStyle={
                    'mt-4 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide'
                  }
                  onClick={() => {
                    console.log('Login')
                  }}
                />
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
