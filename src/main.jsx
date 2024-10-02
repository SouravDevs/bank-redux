import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import Home from './components/pages/Home.jsx'
import Deposit from './components/pages/Deposit.jsx'
import Withdrawl from './components/pages/Withdrawl.jsx'
import ChangePIN from './components/pages/changePIN.jsx'




const router = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
         {
            path: '/',
            element: <SignUp />
         },
         
         {
            path: '/login',
            element: <SignIn />
         },
         {
            path: '/home',
            element: <Home />
         },
         {
            path: '/deposit',
            element: <Deposit />
         },
         {
            path: '/withdrawl',
            element: <Withdrawl />
         },
         {
            path: '/change-PIN',
            element: <ChangePIN />
         },
        
      ]
   }
])




createRoot(document.getElementById('root')).render(
   <Provider store={store}>
    <RouterProvider router={router} />
   </Provider>

)
