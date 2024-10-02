import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { depositBalance } from '../../store/Slices/cartSlice'

function Deposit() {
  // access of nav data
  const location = useLocation()
  const {username} = location.state

  const dispatch = useDispatch()
  
  // useStates
  const [amount, setAmount] = useState('')
  return (
    <div className='w-[320px] sm:w-[500px] h-auto flex items-center flex-col pt-5 pb-10 gap-3 bg-blue-500 rounded-md'>
      <h1 className='text-xl font-semibold'>Deposit</h1>
      {/* Form */}
      <div>
        <label className='font-semibold' htmlFor="">Enter amount : </label>
        <input className='text-center' value={amount} onChange={(e) => setAmount(e.target.value)} type="text" placeholder='1000' />
      </div>
      <button onClick={() => {
        dispatch(depositBalance({username,amount}))
        setAmount('')
      }} className='px-20 py-1 bg-white rounded-md active:bg-slate-300'>Deposit</button>
    </div>
  )
}

export default Deposit