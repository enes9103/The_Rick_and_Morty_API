import React from 'react'
import Link from 'next/link';

export const getServerSideProps = async (context) => {
  const { id } = context.query
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const detail = await res.json()
  return {
    props: {
      detail,
    }
  }
}

const caracterDetails = ({ detail }) => {
  console.log(detail)
  return (
    <main>
      <h1>{detail.name}</h1>
      <div className="profile">
        <div className="profile-image">
          <img src={detail.image} alt={detail.name} />
        </div>
        <div className="profile-details">
          <ul>
            <li>
              <strong>Name:</strong> {detail.name}
            </li>
            <li>
              <strong>Status:</strong> {detail.status}
            </li>
            <li>
              <strong>Gender:</strong> {detail.gender}
            </li>
            <li>
              <strong>Species:</strong> {detail.species}
            </li>
            <li>
              <strong>Location:</strong> {detail.location?.name}
            </li>
            <li>
              <strong>Originally From:</strong> {detail.origin?.name}
            </li>
          </ul>
        </div>
      </div>
      <p className="back">
          <Link href="/">
            <button className="backHome">Go Back Home</button>
          </Link>
        </p>
    </main>
  )
}

export default caracterDetails
