import style from './Frase.module.css'

function Pessoa({foto, nome, fullname, idade, profissao, xp}){
    return(
        <div>
            <img src={foto} alt={nome}/>
            <p>Nome completo: {fullname} idade: {idade}</p>
            <p className={style.redcolor}>Profissão: {profissao} experiência {xp}</p>
        </div>
    )
}
 export default Pessoa