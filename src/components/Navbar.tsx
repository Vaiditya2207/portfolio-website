import styles from '../styles/Navbar.module.css'

function Navbar(){
    return(
        <div className={styles.main}>
            <button className={styles.btn}>
                Home Page
            </button>
            <button className={styles.btn}>
                Projects
            </button>
            <button className={styles.btn}>
                Achievements
            </button>
            <button className={styles.btn}>
                About Me
            </button>
            <button className={styles.btn}>
                Contact Me
            </button>
        </div>
    )
}

export default Navbar;