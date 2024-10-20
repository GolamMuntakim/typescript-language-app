import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from '@emotion/react'
import { createTheme, CssBaseline } from '@mui/material'
import { Palette } from '@mui/icons-material'
const theme = createTheme({
  palette:{
    primary:{
      main:"rgb(255,0,0)",
    },
  },
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ThemeProvider theme={theme}>
    <CssBaseline/>
   <App />
   </ThemeProvider>
  </StrictMode>,
)
