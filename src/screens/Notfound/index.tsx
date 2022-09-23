import './styles.css'
import Transitions from '../../motion'
import Header from '../../components/Header'
import { StatusMember } from '../../components/StatusMember'

export function NotFound() {
  return (
    <>
      <Header />
      <StatusMember />
      <Transitions>
        <section className='notfound'>
          <div className="grid place-items-center h-screen">
            <div className="grid grid-cols-1 bg-gray-500 rounded-lg">
              <h1 className="m-4 from-orange-500 to-pink-500 text-transparent bg-clip-text bg-gradient-to-r">Página não encontrada</h1>
            </div>
          </div>
        </section>
      </Transitions>
    </>
  )
}

