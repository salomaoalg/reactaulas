function Evento({numero}){

    function meuEvento(){
        alert(`Numero Solicitado, ${numero}`)
    }

    return(
        <>
            <p>Clique para disparar um evento!!!</p>
            <button onClick={meuEvento}>Ativar</button>
        </>
    )
}

export default Evento