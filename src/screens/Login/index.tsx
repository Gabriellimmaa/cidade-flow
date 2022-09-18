import { Loading } from '../../components/Loading'
import api from '../../services/api'
import './styles.css'
import { StatusMember } from '../../components/StatusMember'
import { InputText } from '../../components/InputText'
import { useState } from 'react'
import Transitions from '../../motion'


export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    const status = document.getElementById('status') as HTMLDivElement
    if (email === '') {
      status.innerHTML = 'Email é obrigatório'
      return
    }
    if (password === '') {
      status.innerHTML = 'Senha é obrigatória'
      return
    }
    status.innerHTML = 'Carregando...'
  }

  return (
    <Transitions>
      <section className='login'>
        <div className="grid place-items-center h-screen" style={{ marginTop: -70 }}>
          <div className="grid grid-cols-1 w-72">
            <h3>Conecte-se</h3>
            <InputText name="email" type="email" placeHolder="Endereço de email" className='mb-2' onChange={setEmail} value={email} />
            <InputText name="senha" type="password" placeHolder="Digite sua senha" className='mb-5' onChange={setPassword} value={password} />
            <button onClick={handleSubmit}>Entrar</button>
            <span id="status">Preencha os campos</span>
          </div>
        </div>
      </section>
    </Transitions>
  )
}

