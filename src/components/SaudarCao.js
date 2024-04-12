function SaudaCao({nome}){
    function gerarsaudacao(algumNome){
        return `Olá, ${algumNome}, tudo Joia?`
    }

    return(
        <>{nome && <p>{gerarsaudacao(nome)}</p>}</>
    )
}

export default SaudaCao