import styles from "../styles/Navbar.module.css"
import Image from "next/image"
import logo from "../public/logo-2.png"
import Link from "next/link"


const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.leftNav}>
        <a href="/">
          <Image src={logo} alt="logo" height={80} width={220} />
        </a>
      </div>
      <div className={styles.rightNav}>
        <Link href="/" >
          <a className={styles.link}>HOME</a>
        </Link>

        <Link href="/episodes">
          <a className={styles.link}>EPISODES</a>
        </Link>

        <Link href="/about">
          <a className={styles.link}>ABOUT</a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
