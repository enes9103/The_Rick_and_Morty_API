import styles from '../styles/Episode.module.css'
import Link from 'next/link'

const Cards = ({ results }) => {
    console.log(results)
    return (
        <>
            <div className={styles.episodeCard}>
                {results.map((result) => (
                    <div className={styles.episodeCard}>
                        <div className="card" key={result.id} style={{ maxWidth: "22rem" }}>
                            <div className="card-body mt-2">
                                <h5 className="card-title">Episode Name : {result.name}</h5>
                                <p className="card-text">Episode : {result.episode}</p>
                                <p className="card-text">Episode Air Date : {result.air_date}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link href="/">
                <a className="btn btn-primary mb-4">Go Back Home</a>
            </Link>
        </>
    )
}

export default Cards
