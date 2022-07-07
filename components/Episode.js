import React from 'react'
import styles from '../styles/Episode.module.css'

const Cards = ({ results }) => {
    console.log(results)
    return (
        <div className={styles.episodeCard}>
            {results.map((result) => (
            <div className="card" key={result.id} style={{width:"22rem"}}>
                <div className="card-body mt-2">
                    <h5 className="card-title">Episode Name : {result.name}</h5>
                    <p className="card-text">Episode : {result.episode}</p>
                    <p className="card-text">Episode Air Date : {result.air_date}</p>
                </div>
            </div>
            ))}
            <a href="/" className="btn btn-primary">Go Back Home</a>
        </div>
    )
}

export default Cards
