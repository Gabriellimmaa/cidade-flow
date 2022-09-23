import { Routes, Route } from 'react-router-dom'
import { Login } from './screens/Login'
import Inicio from './screens/Inicio'
import { Signup } from './screens/Signup'
import { NotFound } from './screens/Notfound'
import { useEffect } from 'react'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
