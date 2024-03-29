import { useState } from "react"

function Condicional(){
    const[email, setEmail] = useState()
    const[UserEmail, setUserEmail] = useState()
    
    function EnviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        alert(UserEmail)
    }

    function LimparEmail(){
        setUserEmail("")
    }


    return(
        <>
           <h2>Cadastrar Email: </h2> 
           <form>
                <input type="email" placeholder="Digite seu email..."  onChange={(e) => setEmail(e.target.value)} />
                <button type="submit" onClick={EnviarEmail}>Enviar Email</button>
                {UserEmail && (
                    <div>
                        <p>O E-mail do usuário é:{UserEmail}</p>
                        <button onClick={LimparEmail}>Limpar</button>
                    </div>
                )}
           </form>
        </>
    )
}
export default Condicional