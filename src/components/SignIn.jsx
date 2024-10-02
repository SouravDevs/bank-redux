import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function SignIn() {
  // useSelector
  const user = useSelector((state) => state.bank)
  // States
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Check valid user
  const findUser = user.find((user) => user.username === username && user.password === password)

  // Use of navigate
  const nav = useNavigate()
  return (
    <div className='w-[320px] sm:w-[550px] h-[auto] pt-3 pb-7 bg-blue-500 flex flex-col items-center rounded-md'>
        <h1 className='text-2xl sm:text-3xl font-semibold'>Sign In</h1>
        {/*Form Container */}
        <div className='flex flex-col gap-3 mt-5'>
            {/* Form */}
            <div>
                <label className='text-xl sm:text-2xl' htmlFor="">Username: </label>
                <input className='pl-2 sm:text-[18px]' value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' />
            </div>
            {/* Form */}
            <div>
                <label className='text-xl sm:text-2xl' htmlFor="">Password: </label>
                <input className='pl-2 sm:text-[18px]' value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder='Password' />
            </div>
            <button className='font-semibold mt-3 sm:py-2 bg-slate-300 py-1 rounded-md' onClick={() => {
              if(findUser) {
                alert("Login successfully")
                nav('/home', {state: findUser})
              }
              else {
                alert("Invalid credentials")
              }
            }}>Sign In</button>
            <p className='font-semibold text-center'>Don't have an account? <Link className='text-white' to={'/'}>Sign Up</Link></p>
            
        </div>
    </div>
  )
}

export default SignIn