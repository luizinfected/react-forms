import '../components/myForm.css'
import { useState } from 'react'

const MyForm = ({ user }) => {
    // 3 - gerenciamento dos dados
    const [name, setName] = useState(user ? user.nameForm : '')
    const [email, setEmail] = useState(user ? user.emailForm : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState( user ? user.role : '')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviando o formulario' + '\n' + name + '\n' + email + '\n' + bio + '\n' + role)

        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* 1 criação de form */}
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    placeholder='Digite seu nome'
                    onChange={(e) => setName(e.target.value)}
                />

                {/* 2 opção */}
                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        placeholder='Digite seu Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    <span>Bio</span>
                    <textarea
                        name="bio"
                        placeholder='Descrição do usuário'
                        onChange={(e) => setBio(e.target.value)}>
                    </textarea>
                </label>

                <label>
                    <span>Função no sistema</span>
                    <select name='role' onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                    </select>
                </label>

                <input type="submit" value="Enviar" />

            </form>

            <p>Seu nome é: {name}</p>
            <p>Seu email é: {email}</p>
            <p>Sua bio é: {bio}</p>
        </div>
    )
}

export default MyForm;