import React from 'react'
import Card from './Card'
import styles from '../styles/Home.module.css'

const Cards = ({ results }) => {
    console.log(results)
    return (
        <div  className={styles.cardsContainer}>
            {results.map((result) => (
                <div key={result.id}>
                    <Card result={result} />
                </div>
            ))}
        </div>
    )
}

export default Cards
