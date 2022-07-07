import React from 'react'
import Image from "next/image"
import Link from "next/link"
import notFoundImage from "../public/404-2.png"
import styles from "../styles/NotFound.module.css"

const NotFound = () => {
  return (
    <div className={styles.notfound}>
        <div className={styles.text}>
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for.</p>
            <Link href="/">
              <button>Go Back Home</button>
            </Link>      
        </div>
        <Image src={notFoundImage} alt="logo" height={500} width={580} />
    </div>
  )
}

export default NotFound
