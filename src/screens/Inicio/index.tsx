import './styles.css'
import { useEffect, useState } from 'react'
import Transitions from '../../motion'
import { ModalDeleteAccount } from '../../components/ModalDeleteAccount'
import { ModalRecoveryPassword } from '../../components/ModalRecoveryPassword'
import { useNavigate } from 'react-router-dom'
import { StatusMember } from '../../components/StatusMember'
import Header from '../../components/Header'

export default function Inicio() {
  const navigate = useNavigate();
  const [modalAddIsOpenDelete, setModalAddIsOpenDelete] = useState(false)
  const [modalAddIsOpenRecovery, setModalAddIsOpenRecovery] = useState(false)
  const data = JSON.parse(localStorage.getItem('characters') || '[]') || [];

  const handleToggleAddOpenModalDelete = () => {
    setModalAddIsOpenDelete(!modalAddIsOpenDelete)

  }
  const handleToggleAddOpenModalRecovery = () => {
    setModalAddIsOpenRecovery(!modalAddIsOpenRecovery)
  }

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      navigate('/login')
    }
  }, [])

  return (
    <>
      <Header />
      <StatusMember />
      <Transitions>
        <ModalDeleteAccount
          modalAddIsOpen={modalAddIsOpenDelete}
          handleToggleAddOpenModalDelete={handleToggleAddOpenModalDelete}
        />
        <ModalRecoveryPassword
          modalAddIsOpen={modalAddIsOpenRecovery}
          handleToggleAddOpenModalRecovery={handleToggleAddOpenModalRecovery}
        />
        <section className='inicio'>
          <div className="grid place-items-center h-screen">
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
                    {
                      data.map((value: any, key: any) => (
                        <tr key={key}>
                          <td>{value.name}</td>
                          <td>
                            {
                              value.sex === "m" ? "Masculino" : "Feminino"
                            }
                          </td>
                        </tr>
                      ))
                    }
                  </table>
                </div>
                <div className='recover-password mb-3'>
                  <h4>Alterar sua senha</h4>
                  <span>
                    Você pode alterar sua senha
                  </span>
                  <button onClick={handleToggleAddOpenModalRecovery}>ALTERAR SENHA</button>
                </div>
                <div className='delete-account'>
                  <h4>Deletar Conta</h4>
                  <span>
                    Se você não conseguir mais fazer login pelo cliente do jogo, isso significa que os dados associados a esta conta estão corrompidos. Exclua a conta para começar de novo.
                  </span>
                  <button onClick={handleToggleAddOpenModalDelete}>EXCLUIR</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Transitions>
    </>
  )
}
