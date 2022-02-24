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
      <div class="h-screen w-full bg-gradient-to-br from-blue-600 to-indigo-600 flex flex-col justify-center items-center ">
        <div className=" w-4.5 h-24 scale-150">
          <WhiteLogo className={' justify-center items-center  '} />
        </div>

        <form>
          <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div class="space-y-4">
              <h1 class="text-center text-2xl font-semibold text-black-600">
                Login to your account
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

            <div className=" w-full py-1 mt-10 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-md">
              <Link href="/browse" passHref>
                <Button
                  label="Login"
                  btnStyle={' text-white tx-2xl tracking-wide'}
                  onClick={() => {
                    console.log('Login')
                  }}
                />
              </Link>
            </div>
            <div className='px-12 mt-10 '>
              <p>New to StartHub? <span className='hover:text-blue-900 font-semibold active:text-blue-400 px-2 '><Link href='/signup'className> SignUp</Link></span></p>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
