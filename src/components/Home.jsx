import React from 'react'
import Header from './Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Home() {
    // Access nav's data
    const location = useLocation()
    const username = location.state

    // useSelector
    const users = useSelector((state) => state.userData)
    const findUser = users.find((user) => user.username === username)

    // Create a function for dynamic navigate
    const nav = useNavigate()
   
  return (
    <div>
        <Header />
        <h1 className='text-xl from-neutral-700'>Your account balance is : <b>${findUser.balance}</b> </h1>
        <div className='flex flex-col gap-3 mt-5'>
            <button onClick={() => nav('/deposit', {state: username})} className='px-14 opacity-90 hover:opacity-100 py-1 bg-orange-600 text-white text-xl rounded-md'>Deposit Balance</button>
            <button onClick={() => nav('/withdrawl', {state: username})} className='px-14 opacity-90 hover:opacity-100 py-1 bg-blue-600 text-white text-xl rounded-md'>Withdrawl Balance</button>
            <button onClick={() => nav('/change-PIN', {state: username})} className='px-14 opacity-90 hover:opacity-100 py-1 bg-green-600 text-white text-xl rounded-md'>Change PIN</button>
        </div>
    </div>
  )
}

export default Home