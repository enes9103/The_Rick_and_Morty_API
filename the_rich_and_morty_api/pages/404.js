import React from 'react'
import Image from "next/image"
import notFoundImage from "../public/404.png"
import styles from "../styles/NotFound.module.css"

const NotFound = () => {
  return (
    <div className={styles.notfound}>
        <Image src={notFoundImage} alt="logo" height={580} width={580} />
    </div>
  )
}

export default NotFound
