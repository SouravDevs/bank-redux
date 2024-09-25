import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { withdrawlBalance } from '../../store'

function Withdrawl() {
  const [amount, setAmount] = useState('')
  const [pin, setPin] = useState('')

  // Access nav's data
   const location = useLocation()
  const username = location.state

  // useSelector
  const users = useSelector((state) => state.userData)
  const dispatch = useDispatch()
  
  // handle Withdrawl
  const withdrawl = () => {
    const checkPIN = users.find((user) => user.username === username && user.pin === pin)
    if(checkPIN) {
      dispatch(withdrawlBalance(username, amount))
    }
    else {
      alert("PIN is incorrect.")
    }
  }
  return (
    <div className='flex flex-col items-center w-[500px] h-auto py-8 bg-slate-300 rounded-lg'>
    <h1 className='text-2xl font-medium'>Withdarwl</h1>
    <div className='mt-5'>
        <label className='text-xl font-medium' htmlFor="">Enter amount : </label>
        <input className='pl-3 border-none outline-none px-3 py-1 rounded-md'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
         type="text" placeholder='Enter amount' />
    </div>
    <div className='mt-3'>
        <label className='text-xl font-medium' htmlFor="">Enter PIN : </label>
        <input className='pl-3 border-none outline-none px-3 py-1 rounded-md'
           value={pin}
           onChange={(e) => setPin(e.target.value)} 
        type="text" placeholder='1234' />
    </div>

        <button onClick={withdrawl} className='px-10 py-1 bg-sky-700 rounded-md text-white mt-5 opacity-90 hover:opacity-100'>Withdrawl</button>
</div>
  )
}

export default Withdrawl