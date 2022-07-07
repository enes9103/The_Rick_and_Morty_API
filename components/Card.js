import Link from 'next/link'
import styles from "../styles/Home.module.css"

const Card = ({ result }) => {
  return (
    <div className={styles.cardContainer}>
      <Link href={`/detail/${result.id}`} >
        <div className={styles.card}>

          <div className={styles.cursor}>
            <img src={result.image} alt={result.name} />
          </div>
          <h3 className={styles.name}>{result.name}</h3>

        </div>
      </Link>
    </div>
  )
}

export default Card
