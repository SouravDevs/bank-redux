import bankReducer, { addUser, changePIN, depositBalance, withdrawlBalance } from "./Slices/cartSlice";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({reducer: {
  bank: bankReducer,
}})


console.log(store.getState())
const randomID = Math.floor(1000 + Math.random() * 9000)
const randomAccNo = Math.floor(100000000000 + Math.random() * 900000000000)

store.dispatch(addUser({username: "Jacob", password: "1234",id: randomID, amount: 5000, pin: 1234, accNo: randomAccNo}))
store.dispatch(depositBalance({username: 'Jacob', amount: 5000}))





