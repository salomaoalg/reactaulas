import Button from "./components/Evento/Button"

function Evento({numero}){

    function meuEvento(){
        alert(`Numero Solicitado, ${numero}`)
    }

    function segundoEvento(){
        alert(`Segundo Evento`)
    }

    return(
        <>
            <p>Clique para disparar um evento!!!</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
            <button onClick={meuEvento}>Ativar</button>
        </>
    )
}

export default Evento