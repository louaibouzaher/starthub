import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import { Provider } from 'react-redux'
import store from '../src/store'
import { Notification } from '../src/components/Notification'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Notification />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
