function SeuNome({setNome}){
    return(
        <div>
            <p>Digite seu nome</p>
            <input type="text" placeholder="qual é o seu nome?" onChange={(e) => setNome(e.target.value)} />
            
        </div>
    )
}

export default SeuNome