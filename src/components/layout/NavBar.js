import { Link } from "react-router-dom"
import styles from './NavBar.module.css'
function NavBar(){
    return(
    <ul className={styles.list}>
        <li className={styles.item}><Link to="/">Home</Link></li>
        <li className={styles.item}><Link to="empresay">Empresa</Link></li>
        <li className={styles.item}><Link to="contatox">Contato</Link></li>
        <li className={styles.item}><Link to="sobreinfo">Sobre</Link></li>
    </ul>
    )
}
export default NavBar