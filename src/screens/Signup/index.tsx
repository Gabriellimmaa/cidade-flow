import api from '../../services/api'
import './styles.css'
import { InputText } from '../../components/InputText'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import Transitions from '../../motion'
import { hashPassword } from '../../utils'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { StatusMember } from '../../components/StatusMember'
import Header from '../../components/Header'

export function Signup() {
  const navigate = useNavigate();
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
    if (password !== passwordCheck) {
      status.innerHTML = 'As senhas não se coincidem'
      return
    }

    api.post("signup", {
      username: email.toLowerCase(),
      passwordHash: hashPassword(email, password),
      captchaToken: 1
    })
      .then(r => {
        var data = r.data;
        if (data == "ok") {
          localStorage.setItem("email", email);
          navigate('/login')
          toast.success("Cadastro efetuado com sucesso");
        } else {
          if (data === "fail") {
            toast.error("Este email já está em uso");
          } else if (data === "captcha") {
            toast.error("Captch inválido");
          } else if (data === "banned") {
            toast.error("Endereço de IP banido");
          } else if (data === "signup_disabled") {
            toast.error("Desculpe, mas o registro está desativado");
          } else {
            toast.error("Erro desconhecido");
          }
        }
      })
      .catch(e => console.log(e));

    status.innerHTML = 'Carregando...'
  }

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <Header />
      <StatusMember />
      <Transitions>
        <section className='signup'>
          <div className="grid place-items-center h-screen">
            <div className="grid grid-cols-1">
              <h3>Registrar-se</h3>
              <div className='flex items-center mb-2'>
                <Icon icon="bxs-check-shield" className='text-white mr-2 text-3xl' />
                <span style={{ fontSize: 12 }}>Notamos que este é seu primeiro acesso,<br /> Crie sua conta para prosseguir</span>
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
    </>
  )
}

