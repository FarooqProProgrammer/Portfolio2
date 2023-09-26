import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import 'react-vertical-timeline-component/style.min.css';
import { NavProvider } from './hook/NavContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <NavProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </NavProvider>,

)
