import api from '../../services/api'
import './styles.css'
import { StatusMember } from '../../components/StatusMember'
import { InputText } from '../../components/InputText'
import { useState, useEffect } from 'react'
import Transitions from '../../motion'
import { hashPassword, parseLoginResponse } from '../../utils'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header'


export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

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


    api.post("login", {
      username: email.toLowerCase(),
      passwordHash: hashPassword(email, password),
      captchaToken: '',
    })
      .then(r => {
        var result = parseLoginResponse(email, r.data);
        var data = r.data;
        if (result.isSuccessfull()) {
          localStorage.setItem("email", email);
          localStorage.setItem("characters", JSON.stringify(result.characters));
          localStorage.setItem("token", result.token);
          navigate("/");
          toast.success("Login realizado com sucesso!");
        } else {
          if (data === "captcha") {
            toast.error("Captcha inválido");
          } else if (data === "invalid_password") {
            toast.error("Email ou Senha inválidos");
          } else if (data === "not_found") {
            toast.error("Email não encontrado");
          } else if (data === "banned") {
            toast.error("Endereço de IP banido");
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
        <section className='login'>
          <div className="grid place-items-center h-screen">
            <div className="grid grid-cols-1">
              <h3>Conecte-se</h3>
              <InputText name="email" type="email" placeHolder="Endereço de email" className='mb-2' onChange={setEmail} value={email} />
              <InputText name="senha" type="password" placeHolder="Digite sua senha" className='mb-5' onChange={setPassword} value={password} />
              <button onClick={handleSubmit}>Entrar</button>
              <span id="status">Preencha os campos</span>
            </div>
          </div>
        </section>
      </Transitions>
    </>

  )
}

