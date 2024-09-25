import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { changePin } from '../../store'

function ChangePIN() {
  const [pin, setPin] = useState('')
  const [newPin, setNewPin] = useState('')
  const [confirmPin, setConfirmPin] = useState('')

    // Access nav's data
    const location = useLocation()
    const username = location.state
  
    // useSelector
    const users = useSelector((state) => state.userData)
    const dispatch = useDispatch()

    // Handle Change-PIN
    const changePIN = () => {
      const checkPIN = users.find((user) => user.username === username && user.pin === pin)
      if(checkPIN) {
        if(newPin === confirmPin) {
          dispatch(changePin(username,newPin))
        }
        else {
          alert("New PIN & Confirm PIN must be matched.")
        }
      }
      else {
        alert('Wrong PIN')
      }
    }
  
  return (
    <div className='flex flex-col items-center w-[500px] h-auto py-8 bg-slate-300 rounded-lg'>
    <h1 className='text-2xl font-medium'>Change PIN</h1>
    <div className='mt-5'>
        <label className='text-xl font-medium' htmlFor="">Old PIN : </label>
        <input className='pl-3 border-none outline-none px-3 py-1 rounded-md'
        value={pin} onChange={(e) => setPin(e.target.pin)}
         type="text" placeholder='Old PIN' />
    </div>
    <div className='mt-3'>
        <label className='text-xl font-medium' htmlFor="">New PIN : </label>
        <input className='pl-3 border-none outline-none px-3 py-1 rounded-md'
        value={newPin} onChange={(e) => setNewPin(e.target.pin)}
        type="text" placeholder='New PIN' />
    </div>
    <div className='mt-3'>
        <label className='text-xl font-medium' htmlFor="">Confirm New PIN : </label>
        <input className='pl-3 border-none outline-none px-3 py-1 rounded-md'
          value={confirmPin} onChange={(e) => setConfirmPin(e.target.pin)}
        type="text" placeholder='Confirm New PIN' />
    </div>

        <button onClick={changePIN} className='px-10 py-1 bg-sky-700 rounded-md text-white mt-5 opacity-90 hover:opacity-100'>Withdrawl</button>
</div>
  )
}

export default ChangePIN