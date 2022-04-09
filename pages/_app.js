import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import { Provider } from 'react-redux'
import store from '../src/store'
import { Notification } from '../src/components/Notification'
import 'react-toastify/dist/ReactToastify.css'
import { setToken } from '../src/store/User/user.actions'
import { getCurrentUser } from '../src/store/User/user.api'
import Navbar from '../src/components/Navbar'

if (typeof window !== 'undefined') {
  const token = localStorage.getItem('token')
  const refreshToken = localStorage.getItem('refreshToken')

  if (token) {
    store.dispatch(setToken({ access: token, refresh: refreshToken }))
    store.dispatch(getCurrentUser())
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Navbar />
      <Notification />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
