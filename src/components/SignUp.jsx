import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addNewUser } from "../store";

function SignUp() {
  const dispatch = useDispatch()
  const randomAccNumber = Math.floor(
    100000000000 + Math.random() * 900000000000
  );
  // Declares states
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [balance, setBalance] = useState("");
  const [PIN, setPIN] = useState("");

  // Handle Navigate
  const nav = useNavigate()

  // handle onChange
  const register = () => {
  if(username && password && balance && PIN) {
    dispatch(addNewUser(username, password, randomAccNumber,parseInt(balance),PIN))
    nav('/signin')
  }
  else {
    alert("Fill all the blanks")
  }
  }

  return (
    <div className="w-[500px] h-auto py-5 flex flex-col items-center bg-slate-400 rounded-md">
      <h1 className="text-2xl font-semibold">Sign Up</h1>
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
        <div>
          <label className="text-[20px]" htmlFor="">
            Balance :{" "}
          </label>
          <input
            className="rounded-sm border-none outline-none pl-3 text-[18px]"
            type="text"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            placeholder="Balance"
          />
        </div>
        <div>
          <label className="text-[20px]" htmlFor="">
            PIN :{" "}
          </label>
          <input
            className="rounded-sm border-none outline-none pl-3 text-[18px]"
            type="text"
            value={PIN}
            onChange={(e) => setPIN(e.target.value)}
            placeholder="PIN"
          />
        </div>
      </div>
      <button onClick={register} className="px-14 py-1 font-bold bg-orange-400 mt-5 rounded-md">
        Sign Up
      </button>
      <p className="pt-5">
        Already have an account?{" "}
        <Link className="text-blue-700 font-bold" to="/signin">
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default SignUp;
