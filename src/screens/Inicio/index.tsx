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

export default function Inicio() {
  return (
    <section className='inicio'>
      <StatusMember />
      <div className="grid place-items-center h-screen" style={{ marginTop: -133 }}>
        <div className="grid grid-cols-1">
          <h3>Conecte-se</h3>
          <InputText type="email" placeHolder="Endereço de email" className='mb-2'/>
          <InputText type="password" placeHolder="Digite sua senha" className='mb-5'/>
          <button>Entrar</button>
          <span>Digite um nome de usuario</span>
        </div>
      </div>
    </section>
  )
}
