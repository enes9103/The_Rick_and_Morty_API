import React from 'react'
import styles from '../styles/Episode.module.css'

const Cards = ({ results }) => {
    console.log(results)
    return (
        <div>
            {results.map((result) => (
                <div key={result.id}>
                    <p>Episode Name : {result.name}</p>
                    <p>Episode Air Date : {result.air_date}</p>
                    <p>Episode : {result.episode}</p>         
                </div>
            ))}
        </div>
    )
}

export default Cards
