import { createSlice } from "@reduxjs/toolkit";

// Find Index Function
const findIndex = (state, action) => state.findIndex((cartItem) => cartItem.username === action.payload.username)

const slice = createSlice({
  name: 'bank',
  initialState: [],
  reducers: {
    addUser(state, action) {
      const findIndexItem = findIndex(state, action)
      if(findIndexItem !== -1) {
        alert("User already exist")
      }
      else {
        state.push({...action.payload})
        return state
      }
    },
    depositBalance(state, action) {
      const findIndexItem = findIndex(state, action)
      if(action.payload.amount > 10000) {
        alert("You can't deposit greater than 10000")
      }
      else {
        state[findIndexItem].amount += parseInt(action.payload.amount)
        return state
      }
    },
    withdrawlBalance(state, action) {
      const findIndexItem = findIndex(state, action)
      if(state[findIndexItem].pin !== action.payload.pin) {
        alert("Your PIN is incorrect!")
      }
      else {
        if(state[findIndexItem].amount < action.payload.amount) {
          alert("Insufficient balance")
        }
          else {
            state[findIndexItem].amount -= parseInt(action.payload.amount)
            return state
        }
      }
      
    },
    changePIN(state, action) {
      const findIndexItem = findIndex(state, action)
      if(state[findIndexItem].pin !== action.payload.pin) {
        alert("Your PIN is incorrect!")
      }
      else {
        state[findIndexItem].pin = parseInt(action.payload.newPin)
        return state
      }
    }
  }
})
export const {addUser, depositBalance, withdrawlBalance, changePIN} = slice.actions
export default slice.reducer