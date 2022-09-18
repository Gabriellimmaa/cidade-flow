import { Routes, Route } from 'react-router-dom'
import { Login } from './screens/Login'
import Inicio from './screens/Inicio'
import { Signup } from './screens/Signup'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/inicio" element={<Inicio />} />
    </Routes>
  )
}
