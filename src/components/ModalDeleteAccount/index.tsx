import Modal from '../Modal'
import { FormEvent, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import './styles.css'
import api from '../../services/api'
import { hashPassword } from '../../utils'
import { useNavigate } from "react-router-dom";

interface ModalAgendamentoProps {
    modalAddIsOpen: boolean
    handleToggleAddOpenModalDelete: () => void
}

export function ModalDeleteAccount({
    modalAddIsOpen,
    handleToggleAddOpenModalDelete,
}: ModalAgendamentoProps) {
    const navigate = useNavigate();
    const [password, setPassword] = useState('')

    function handleSubmit(event: FormEvent) {
        event.preventDefault()
        const status = document.getElementById('status') as HTMLDivElement
        if (password === '') {
            status.innerHTML = 'Senha é obrigatória'
            return
        }
        
        const user = localStorage.getItem("email")
        api.post("delete", {
            token: localStorage.getItem("token"),
            passwordHash: hashPassword(user?.toLowerCase(), password)
        })
            .then(r => {
                if (r.data == "ok") {
                    localStorage.clear();
                    navigate("/login");
                    toast.success("Conta deletada com sucesso");
                } else {
                    toast.error("Senha incorreta");
                }
            })
            .catch(e => {
                toast.error("Erro desconhecido");
            });

        status.innerHTML = 'Carregando...'
    }

    useEffect(() => {
        setPassword('')
    }, [modalAddIsOpen])

    return (
        <Modal isOpen={modalAddIsOpen} setIsOpen={handleToggleAddOpenModalDelete}>
            <div className='modal-delete-header'>
                <h3>Deletar Conta - {localStorage.getItem("email")}</h3>
                <button type="button" onClick={handleToggleAddOpenModalDelete}>
                    <b>X</b>
                </button>
            </div>
            <p>Você tem certeza que deseja deletar sua conta?</p>
            <form onSubmit={handleSubmit} className="modal-delete-form">
                <input
                    id="password"
                    name="password"
                    placeholder="Digite sua senha"
                    type="password"
                    onChange={event => setPassword(event.target.value)}
                />
                <span id="status" className='text-yellow-500'></span>
                <input
                    id="submit"
                    name="submit"
                    type="submit"
                    value="EXCLUIR CONTA"
                />
            </form>
        </Modal>
    )
}
