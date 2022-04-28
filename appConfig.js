import tailwindConfig from './tailwind.config'
import { createTheme } from '@mui/material/styles'

export const API_BASEURL =
  // process.env.NODE_ENV == 'production'
  // ?
  'https://starthubapi.herokuapp.com/'
// : 'http://127.0.0.1:8000/'

export const theme = createTheme({
  palette: {
    primary: {
      main: tailwindConfig.theme.extend.colors.purple,
    },
  },
})
