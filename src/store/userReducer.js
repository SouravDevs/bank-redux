// export const ADD_NEW_USER = 'add/newUser'
// export const CHANGE_PIN = 'change/PIN'
// export const DEPOSIT_BALANCE = 'deposit/Balance'
// export const WITHDRAWL_BALANCE = 'withdrawl/Balance'


// Action Creators
// export function addNewUser(username, password, accNum, balance, pin) {
//     return {
//         type: ADD_NEW_USER,
//         payload: {username, password, accNum, balance, pin}
//     }

// }


// // Reducer
// export default function userReducer(state = [], action) {
//     switch(action.type) {
//         case ADD_NEW_USER:
//             const findUser = state.find((user) => user.username === action.payload.username)
//             if(findUser) {
//                 console.log('Username is already is alread taken.')
//             } 
//             else {
//                 return [...state, action.payload]
//             }

//         case CHANGE_PIN: 
//         return state.map((user) => {
//             if(user.username === action.payload.username) {
//                 return {...user, pin: action.payload.pin}
//             }
//             else {
//                 return user
//             }
//         })
    
        
//         case DEPOSIT_BALANCE:
//             return state.map((user) => {
//                 if(user.username === action.payload.username) {
//                     return {...user, balance: user.balance + action.payload.amount}
//                 }
//                 else {
//                     return user
//                 }
//             })

//         case WITHDRAWL_BALANCE:
//             return state.map((user) => {
//                 if(user.username === action.payload.username) {
//                    if(user.balance > action.payload.amount) {
//                     return {...user, balance: user.balance - action.payload.amount}
//                    }
//                    else {
//                     console.log('Insuffient Balance')
//                    }
//                 }
//                 return user
//             })}
        
 
// }