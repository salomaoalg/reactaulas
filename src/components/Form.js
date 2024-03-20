import { useState } from "react"

function Form() {

    function CadastroUsuario(e) {
        e.preventDefault()
        alert("USUARIO CADASTRADO!!")
        alert(`Usuário ${name} foi cadastrado com a senha ${passwd}`)
    }

    const [name, setName] = useState("Matheus")
    const [passwd, setPasswd] = useState()


    return (
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={CadastroUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Digite seu nome:"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>                
                
                <div>
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Digite a sua senha" 
                        onChange={(e) => setPasswd(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Form