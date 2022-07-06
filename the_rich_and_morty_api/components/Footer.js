import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="py-4 container-fluid bg-yellow">
            <p className="text-center fs-4 text-muted m-0">© {new Date().getFullYear()} Copyright - Developed by <a className='text-info ms-2' target="_blank" href="https://github.com/enes9103">Enes ÜNLÜ</a></p>
        </footer>
    </div>
  )
}

export default Footer
