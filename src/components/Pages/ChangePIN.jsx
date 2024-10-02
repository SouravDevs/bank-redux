import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { changePIN } from '../../store/Slices/cartSlice'

function ChangePIN() {
  // access of nav data
  const location = useLocation()
  const {username, pin} = location.state

  // useStates
  const [PIN, setPIN] = useState('')
  const [newPin, setNewPin] = useState('')

  const dispatch = useDispatch()
  return (
    <div className='w-[320px] sm:w-[500px] h-auto flex items-center flex-col pt-5 pb-10 gap-3 bg-blue-500 rounded-md'>
    <h1 className='text-xl font-semibold'>Change PIN</h1>
    {/* Form */}
    <div>
      <label className='font-semibold' htmlFor="">Enter Old PIN : </label>
      <input className='text-center' value={PIN} onChange={(e) => setPIN(e.target.value)} type="text" placeholder='1000' />
    </div>
    <div>
      <label className='font-semibold' htmlFor="">Enter New PIN : </label>
      <input className='text-center' value={newPin} onChange={(e) => setNewPin(e.target.value)} type="text" placeholder='1000' />
    </div>
    <button onClick={() => {
        if(pin === parseInt(PIN)) {
          dispatch(changePIN({username, pin, newPin}))
        }
        else {
          alert('Wrong PIN')
        }
    }} className='px-20 py-1 bg-white rounded-md mt-3 active:bg-slate-300'>Change PIN</button>
  </div>
  )
}

export default ChangePIN