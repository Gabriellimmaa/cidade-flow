import { useState } from 'react'

import { FaBars } from 'react-icons/fa'
import './styles.css'

import { Icon } from '@iconify/react';


import { Link } from 'react-router-dom'
import logo from '../../assets/img/banner.png'

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation flex items-center bg-gray-500">
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <FaBars />
      </button>


      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <div className='flex items-center'>
          <Link to="/" className='mr-auto'>
            <img className="mr-10" src={logo} />
          </Link>
          <ul className="navigation-menu-ul">
            <li>
              <Link to="/download" className='p-5 flex items-center'>
                <Icon icon="bxs:cloud-download" className='text-white mr-2 text-2xl' /> DOWNLOAD
              </Link>
            </li>
            <li>
              <Link to="/discord" className='p-5 flex items-center'>
                <Icon icon="akar-icons:discord-fill" className='text-white mr-2 text-2xl' /> DISCORD
              </Link>
            </li>
            <li>
              <Link to="/sobre" className='p-5 flex items-center'>
                <Icon icon="simple-icons:aboutdotme" className='text-white mr-2 text-2xl' /> SOBRE
              </Link>
            </li>
            <li>
              <Link to="/hoteis" className='p-5 flex items-center'>
                <Icon icon="bxs:server" className='text-white mr-2 text-2xl' /> STATUS DO SERVIDOR
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <div className='flex items-center'>
          <ul className="navigation-menu-ul">
            <li>
              <Link to="/login" className='p-5'>ENTRAR</Link>
            </li>
            <li>
              <Link to="/signup" className='pl-5 py-5'>REGISTRE-SE</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
