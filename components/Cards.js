import React from 'react'
import Card from './Card'

const Cards = ({ results }) => {
    console.log(results)
    return (
        <div>
            {results.map((result) => (
                <div className='grid' key={result.id}>
                    <Card result={result} />
                </div>
            ))}
        </div>
    )
}

export default Cards
