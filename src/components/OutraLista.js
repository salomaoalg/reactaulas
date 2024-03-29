
function Outralista({itens}){
    return(
        <>
            <h3>Lista de nomes</h3>
            {itens.length > 0 ? (
            itens.map((item, index) =>(
                <p key={index}>{item}</p>
            ))):(
                <p>Não ah itens na lista!</p>
            )}
        </>
    )
}
export default Outralista