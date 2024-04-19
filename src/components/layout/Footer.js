import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import styles from "./footer.module.css"

function Footer(){
    return(
        <footer>
            <p>Todos os direitos reservados!</p>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
        </footer>
    )
}
export default Footer