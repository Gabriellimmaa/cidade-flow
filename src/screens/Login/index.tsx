import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading'
import api from '../../services/api'
import './styles.css'

interface HoteisProps {
  id: number
  nome: string
  preco: number
  logo: string
  email: string
  site: string
  telefone: string
  latitude: string
  longitude: string
}

export function Login() {
  return (
    <section id="hotel">
      <div className="title-style-1">
        <h1>Login</h1>
        <h2>
          Encontre hotéis, pousadas e muito outros lugares para se hospedar!
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-5 justify-items-center">

      </div>
    </section>
  )
}
