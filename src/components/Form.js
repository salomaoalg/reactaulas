function Form(){

    function CadastroUsuario(e){
        e.preventDefault()
        alert("USUARIO CADASTRADO!!")
    }

    return(
        <div>
            <h1>Meu Cadastro</h1>
            <form onSubmit={CadastroUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome:" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}
export default Form