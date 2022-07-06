import React from 'react'

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
    <div>
      detail
    </div>
  )
}

export default caracterDetails
