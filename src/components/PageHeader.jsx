import React from 'react'
import { Link } from 'react-router-dom'

const PageHeader = () => {
  return (
    <div className='bg-gray-900 text-white'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
    </div>
  )
}

export default PageHeader