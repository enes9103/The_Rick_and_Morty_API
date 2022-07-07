import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div>
        <footer className={styles.container}>
            <p>© {new Date().getFullYear()} Copyright - Developed by <a target="_blank" className={styles.github} href="https://github.com/enes9103">Enes ÜNLÜ</a></p>
        </footer>
    </div>
  )
}

export default Footer
