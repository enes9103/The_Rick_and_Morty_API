import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import logo from "../public/logo-2.png"


const Navbar = () => {
  return (
    <div className={styles.navContainer}>
    <div className={styles.leftNav}>
      <a href="/">
        <Image src={logo} alt="logo" height={80} width={220} />
      </a>
    </div>
    <div className={styles.rightNav}>
      <nav>
        <span>
          <a href="/" className={styles.link}>
            HOME
          </a>
        </span>
        <span>
          <a href="/episodes" className={styles.link}>
            EPISODES
          </a>
        </span>
        <span>
          <a href="/about" className={styles.link}>
            ABOUT
          </a>
        </span>
      </nav>
    </div>
  </div>
  )
}

export default Navbar
