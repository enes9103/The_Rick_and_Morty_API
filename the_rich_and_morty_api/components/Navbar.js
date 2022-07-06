import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
    <div className={styles.leftNav}>
      <a href="/">
        {/* <Image src={logo} alt="logo" width={100} height={100} /> */}
      </a>
      <a className={styles.title} href="/">
        <p>Rick and Morty</p>
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
          <a href="/" className={styles.link}>
            
          </a>
        </span>
        <span>
          <a href="/blog" className={styles.link}>
            ABOUT
          </a>
        </span>
      </nav>
    </div>
  </div>
  )
}

export default Navbar
