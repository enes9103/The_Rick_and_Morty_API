import React from 'react'
import styles from '../styles/Episode.module.css'

const Cards = ({ results }) => {
    console.log(results)
    return (
        <div className={styles.episodeCard}>
            {results.map((result) => (
            <div class="card" key={result.id} style={{width:"22rem"}}>
                <div class="card-body">
                    <h5 class="card-title">Episode Name : {result.name}</h5>
                    <p class="card-text">Episode : {result.episode}</p>
                    <p class="card-text">Episode Air Date : {result.air_date}</p>
                </div>
            </div>
            ))}
            <a href="/" class="btn btn-primary">Go Back Home</a>
        </div>
    )
}

export default Cards
