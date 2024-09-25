import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
    // Declares states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const users = useSelector((state) => state.userData)

  // handle Navigate
  const nav = useNavigate()
  
  // Handle Login
  const logIn = () => {
    const checkCredentials = users.find((user) => user.username === username && user.password === password)
    if(checkCredentials) {
      nav('/home', {state: username})
    }
    else {
      alert('User not found.')
    }
  }


  return (
    <div className="w-[500px] h-auto py-5 flex flex-col items-center bg-slate-400 rounded-md">
      <h1 className="text-2xl font-semibold">Sign In</h1>
      <div className="flex flex-col gap-3 mt-3">
        <div>
          <label className="text-[20px]" htmlFor="">
            Username :{" "}
          </label>
          <input
            className="rounded-sm border-none outline-none pl-3 text-[18px]"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div>
          <label className="text-[20px]" htmlFor="">
            Password :{" "}
          </label>
          <input
            className="rounded-sm border-none outline-none pl-3 text-[18px]"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
      </div>
      <button onClick={logIn} className="px-14 py-1 font-bold bg-orange-400 mt-5 rounded-md">
        Sign In
      </button>
      <p className="pt-5">
        Don't have an account?{" "}
        <Link className="text-blue-700 font-bold" to="/">
          Sign Up
        </Link>
      </p>
    </div>
  )
}

export default SignIn