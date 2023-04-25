import FooterLinksComponent from './footerLinks-component';
import {FooterResults} from '../../types/Homepage/footer-type'
import styles from '../../styles/Homepage/Footer.module.css'

type Props = {
    allFooters: FooterResults;
}

const FooterComponent = ({allFooters}: Props) => {
    const footer = allFooters.results[0];
    return(
        <footer className={styles.footer}>
            <div className={styles.footerBox}>
                <FooterLinksComponent menuResults  = {footer?.menuItems} />                
            </div>
        </footer>
        
    )
}

export default FooterComponent