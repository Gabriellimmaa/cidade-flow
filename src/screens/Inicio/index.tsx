import { GiCommercialAirplane, GiSoccerBall } from 'react-icons/gi'
import { FaHotel } from 'react-icons/fa'
import { MdFastfood } from 'react-icons/md'
import { BiPhotoAlbum } from 'react-icons/bi'
import { GrSchedule } from 'react-icons/gr'

import './styles.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { StatusMember } from '../../components/StatusMember'
import { InputText } from '../../components/InputText'
import { useState } from 'react'
import Transitions from '../../motion'

export default function Inicio() {
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
      <section className='inicio'>
        <div className="grid place-items-center h-screen" style={{ marginTop: -70 }}>
          <div className="grid grid-cols-1 md:w-3/4 lg:md:w-6/12 w-11/12">
            <h3>GERENCIAMENTO DO USUÁRIO</h3>
            <div className='inicio-container'>
              <div className='user-info mb-3'>
                <h4>Seus Personagens</h4>
                <table>
                  <tr>
                    <th>Nome</th>
                    <th>Sexo</th>
                  </tr>
                  <tr>
                    <td>Gabriel lima</td>
                    <td>Masculino</td>
                  </tr>
                </table>
              </div>
              <div className='recover-password mb-3'>
                <h4>Alterar sua senha</h4>
                <input name="password" type="password" placeholder="Insira sua senha" />
                <input name="password" type="password" placeholder="Repita sua senha" />
                <button>ALTERAR SENHA</button>
              </div>
              <div className='delete-account'>
                <h4>Deletar Conta</h4>
                <span>
                  Se você não conseguir mais fazer login pelo cliente do jogo, isso significa que os dados associados a esta conta estão corrompidos. Exclua a conta para começar de novo.
                </span>
                <button>EXCLUIR</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Transitions>
  )
}
