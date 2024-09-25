import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { depositBalance } from '../../store'

function Deposit() {
  const [amount, setAmount] = useState('')
  const dispatch = useDispatch()

  // Access nav's data
  const location = useLocation()
  const username = location.state
  console.log(username)

  // Handle Deposit
  const deposit = () => {
    dispatch(depositBalance(username, amount))
    setAmount('')
  }
  return (
    <div className='flex flex-col items-center w-[500px] h-auto py-8 bg-slate-300 rounded-lg'>
        <h1 className='text-2xl font-medium'>Deposit</h1>
        <div className='mt-5'>
            <label className='text-xl font-medium' htmlFor="">Enter amount : </label>
            <input className='pl-3 border-none outline-none px-3 py-1 rounded-md' 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="text" placeholder='Enter amount' />
        </div>

            <button onClick={deposit} className='px-10 py-1 bg-sky-700 rounded-md text-white mt-5 opacity-90 hover:opacity-100'>Deposit</button>
    </div>
  )
}

export default Deposit