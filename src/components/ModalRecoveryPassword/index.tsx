import Modal from '../Modal'
import { FormEvent, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import './styles.css'
import api from '../../services/api'
import { hashPassword } from '../../utils'

interface ModalAgendamentoProps {
    modalAddIsOpen: boolean
    handleToggleAddOpenModalRecovery: () => void
}
export function ModalRecoveryPassword({
    modalAddIsOpen,
    handleToggleAddOpenModalRecovery,
}: ModalAgendamentoProps) {
    const [password, setPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordCheck, setNewPasswordCheck] = useState('')

    function handleSubmitCliente(event: FormEvent) {
        event.preventDefault()
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        const status = document.getElementById('status') as HTMLDivElement
        if (password === '') {
            status.innerHTML = 'Digite sua senha atual'
            return
        }
        if (newPassword === '') {
            status.innerHTML = 'Digite sua nova senha'
            return
        }
        if (newPasswordCheck === '') {
            status.innerHTML = 'Confirme sua nova senha'
            return
        }
        if (newPassword !== newPasswordCheck) {
            status.innerHTML = 'As senhas não se coincidem'
            return
        }
        if (password === newPassword) {
            status.innerHTML = 'Sua nova senha não pode ser igual a senha atual'
            return
        }
        const email = localStorage.getItem("email")
        const token = localStorage.getItem("token")

        api.post("changepassword", {
            token: token,
            passwordHash: hashPassword(email?.toLowerCase(), password),
            newPasswordHash: hashPassword(email?.toLowerCase(), newPassword)
        })
            .then(r => {
                if (r.data == "ok") {
                    handleToggleAddOpenModalRecovery()
                    toast.success("Senha alterada com sucesso")
                } else {
                    toast.error("Senha incorreta")
                }
            })
            .catch(e => console.log(e));

        status.innerHTML = 'Carregando...'
    }
    useEffect(() => {
        setPassword('')
        setNewPassword('')
        setNewPasswordCheck('')
    }, [modalAddIsOpen])
    return (
        <Modal isOpen={modalAddIsOpen} setIsOpen={handleToggleAddOpenModalRecovery}>
            <div className='modal-recovery-header'>
                <h3>Alterar Senha</h3>
                <button type="button" onClick={handleToggleAddOpenModalRecovery}>
                    <b>X</b>
                </button>
            </div>
            <p>Você tem certeza que deseja alterar sua senha?</p>
            <form onSubmit={handleSubmitCliente} className="modal-recovery-form">
                <input
                    id="password"
                    name="password"
                    placeholder="Senha atual"
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                />
                <input
                    id="password"
                    name="password"
                    placeholder="Nova senha"
                    type="password"
                    onChange={event => setNewPassword(event.target.value)}
                />
                <input
                    id="passwordCheck"
                    name="passwordCheck"
                    placeholder="Confirme sua nova senha"
                    type="password"
                    onChange={event => setNewPasswordCheck(event.target.value)}
                />
                <span id="status" className='text-yellow-500'></span>
                <button onClick={handleSubmit}>
                    ALTERAR SENHA
                </button>
            </form>
        </Modal>
    )
}
