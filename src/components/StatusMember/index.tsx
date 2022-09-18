import './styles.css'
import logo from '../../assets/img/brasil-icon.png'
export function StatusMember() {
  return (
    <div className='status-member'>
      <div className='circle'></div>
      <p className='whitespace-nowrap'>POPULAÇÃO ONLINE:</p>
      <p className='whitespace-nowrap'>30 / 300</p>
      <img src={logo} />
    </div>
  )
}
