import { createStore } from "redux"

// Generated 12 digit account number
const randomAccNumber = Math.floor(100000000000 + Math.random()* 900000000000)
const randomAccNumber2 = Math.floor(100000000000 + Math.random()* 900000000000)

const initialState = {
    userData: []
}


// Variables
const ADD_NEW_USER = 'add/newUser'
const CHANGE_PIN = 'change/PIN'
const DEPOSIT_BALANCE = 'deposit/Balance'
const WITHDRAWL_BALANCE = 'withdrawl/Balance'

export function addNewUser(username, password, accNum, balance, pin) {
    return {
        type: ADD_NEW_USER,
        payload: {username, password, accNum, balance, pin}
    }

}

export function depositBalance (username ,amount) {
     return {
        type: DEPOSIT_BALANCE,
        payload: {username, amount}
    }
}
export function withdrawlBalance (username ,amount) {
     return {
        type: WITHDRAWL_BALANCE,
        payload: {username, amount}
    }
}

export function changePin(username, pin) {
    return {
        type: CHANGE_PIN,
        payload: {username, pin}
    }
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case ADD_NEW_USER:
            const findUser = state.userData.find((user) => user.username === action.payload.username)
            if(findUser) {
                alert('Username is already is alread taken.')
            } 
            else {
                return {...state, userData: [...state.userData, action.payload]}
            }

        case CHANGE_PIN: 
        return {...state, userData: state.userData.map((user) => {
            if(user.username === action.payload.username) {
                return {...user, pin: action.payload.pin}
            }
            else {
                return user
            }
        })}

        
        case DEPOSIT_BALANCE:
            return {...state, userData: state.userData.map((user) => {
                if(user.username === action.payload.username) {
                    return {...user, balance: user.balance + parseInt(action.payload.amount)}
                }
                else {
                    return user
                }
            })}

        case WITHDRAWL_BALANCE:
            return {...state, userData: state.userData.map((user) => {
                if(user.username === action.payload.username) {
                   if(user.balance > action.payload.amount) {
                    return {...user, balance: user.balance - parseInt(action.payload.amount)}
                   }
                   else {
                    alert('Insuffient Balance')
                   }
                }
                return user
            })}
        }
 
    }
    

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
store.dispatch(addNewUser('Jacob', '1234', randomAccNumber, 5000, '1234'))
store.dispatch(addNewUser('Maddie', '1234', randomAccNumber2, 3500, '1234'))

