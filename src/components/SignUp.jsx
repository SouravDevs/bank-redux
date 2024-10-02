import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from '../store/Slices/cartSlice'

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [amount, setAmount] = useState('')
    const [pin, setPin] = useState('')

    const id = Math.floor(1000 + Math.random() * 9000)
const accNo = Math.floor(100000000000 + Math.random() * 900000000000)

    const dispatch = useDispatch()
    const nav = useNavigate()

  return (
    <div className='w-[320px] sm:w-[550px] h-[auto] pt-3 pb-7 bg-blue-500 flex flex-col items-center rounded-md'>
        <h1 className='text-2xl sm:text-3xl font-semibold'>Sign Up</h1>
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
            {/* Form */}
            <div>
                <label className='text-xl sm:text-2xl' htmlFor="">PIN: </label>
                <input className='pl-2 sm:text-[18px]' value={pin} onChange={(e) => setPin(e.target.value)} type="text" placeholder='PIN' />
            </div>
            {/* Form */}
            <div>
                <label className='text-xl sm:text-2xl' htmlFor="">Amount: </label>
                <input className='pl-2 sm:text-[18px]' value={amount} onChange={(e) => setAmount(e.target.value)} type="text" placeholder='Amount' />
            </div>

            <button className='font-semibold mt-3 sm:py-2 bg-slate-300 py-1 rounded-md' onClick={() => {
                dispatch(addUser({username,password,pin,amount,id,accNo}))
                nav('/login')

            }}>Sign Up</button>
            <p className='font-semibold text-center'>Already have an account? <Link className='text-white' to={'/login'}>Sign In</Link></p>
            
        </div>
    </div>
  )
}

export default SignUp