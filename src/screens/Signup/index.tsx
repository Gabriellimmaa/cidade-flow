import { Loading } from '../../components/Loading'
import api from '../../services/api'
import './styles.css'
import { StatusMember } from '../../components/StatusMember'
import { InputText } from '../../components/InputText'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import Transitions from '../../motion'


export function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')

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
      <section className='signup'>
        <div className="grid place-items-center h-screen" style={{ marginTop: -70 }}>
          <div className="grid grid-cols-1 w-72">
            <h3>Registrar-se</h3>
            <div className='flex items-center mb-2'>
              <Icon icon="bxs-check-shield" className='text-white mr-2 text-5xl' />
              <span style={{ fontSize: 12 }}>Notamos que este é seu primeiro acesso, Crie sua conta para prosseguir</span>
            </div>

            <InputText name="email" type="email" placeHolder="Endereço de email" className='mb-2' onChange={setEmail} value={email} />
            <InputText name="senha" type="password" placeHolder="Digite sua senha" className='mb-2' onChange={setPassword} value={password} />
            <InputText name="senha-check" type="password" placeHolder="Repita sua senha" className='mb-5' onChange={setPasswordCheck} value={passwordCheck} />
            <button onClick={handleSubmit}>Criar sua Conta</button>
            <span id="status">Preencha os campos</span>
          </div>
        </div>
      </section>
    </Transitions>
  )
}

