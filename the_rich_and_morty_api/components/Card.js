import React from 'react'
import Link from 'next/link'

const Card = ({ result }) => {
  return (
    <>
      <Link href={`/${result.id}`} >
        <a className="card">
          <h3>{result.name}</h3>
        </a>
      </Link>
    </>
  )
}

export default Card
