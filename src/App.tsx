import Header from './components/Header'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import ScrollToTop from './hooks/scrollToTop'
import { useState } from 'react'
import { StatusMember } from './components/StatusMember'

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer />
      <Router />
    </BrowserRouter>
  )
}

export default App
