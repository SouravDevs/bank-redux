import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { withdrawlBalance } from '../../store/Slices/cartSlice'

function Withdrawl() {
  // access of nav data
  const location = useLocation()
  const {username, pin} = location.state

  // useStates
  const [amount, setAmount] = useState('')
  const [PIN, setPIN] = useState('')

  const dispatch = useDispatch()
  return (
    <div className='w-[320px] sm:w-[500px] h-auto flex items-center flex-col pt-5 pb-10 gap-3 bg-blue-500 rounded-md'>
      <h1 className='text-xl font-semibold'>Deposit</h1>
      {/* Form */}
      <div>
        <label className='font-semibold' htmlFor="">Enter amount : </label>
        <input className='text-center' value={amount} onChange={(e) => setAmount(e.target.value)} type="text" placeholder='1000' />
      </div>
      <div>
        <label className='font-semibold' htmlFor="">Enter PIN : </label>
        <input className='text-center' value={PIN} onChange={(e) => setPIN(e.target.value)} type="text" placeholder='1000' />
      </div>
      <button onClick={() => {
        if(pin === parseInt(PIN)) {
          dispatch(withdrawlBalance({username,pin, amount}))
          setAmount('')
          setPIN('')
        }
        else {
          alert("Wrong PIN")
          console.log(PIN)
        }
       
      }} className='px-20 py-1 bg-white rounded-md active:bg-slate-300'>Withdrawl</button>
    </div>
  )
}

export default Withdrawl