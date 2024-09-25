import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const nav = useNavigate()
  return (
    <div className='absolute top-5 right-10'>
        <button className='font-semibold text-xl' onClick={() => nav('/')}>Log Out</button>
    </div>
  )
}

export default Header