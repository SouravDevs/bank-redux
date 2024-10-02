import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Home() {
    // access of navigate data
    const location = useLocation()
    const user = location.state
    
    // use of navigate
    const nav = useNavigate()
  return (
    <>
    <h1 className='text-xl sm:text-2xl'>Your account balance is : <b>${user.amount}</b></h1>
    <div className='flex flex-col gap-3 mt-5'>
        <button onClick={() => nav('/deposit', {state: user})} className='px-5 py-1 sm:text-xl w-[250px] sm:w-[300px] text-center opacity-90 font-semibold hover:opacity-100 bg-sky-500' >Deposit Balance</button>
        <button onClick={() => nav('/withdrawl', {state: user})} className='px-5 py-1 sm:text-xl w-[250px] sm:w-[300px] text-center opacity-90 font-semibold hover:opacity-100 bg-orange-500' >Withdrawl Balance</button>
        <button onClick={() => nav('/change-PIN', {state: user})} className='px-5 py-1 sm:text-xl w-[250px] sm:w-[300px] text-center opacity-90 font-semibold hover:opacity-100 bg-green-500' >Change PIN</button>
    </div>
    </>
  )
}

export default Home