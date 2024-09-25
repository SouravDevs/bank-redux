import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignUp from './components/SignUp.jsx'
import SignIn from './components/SignIn.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import Home from './components/Home.jsx'
import Deposit from './components/Pages/Deposit.jsx'
import Withdrawl from './components/Pages/Withdrawl.jsx'
import ChangePIN from './components/Pages/ChangePIN.jsx'


const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>This is an error page.</div>,
    children: [
      {
        path: '/',
        element: <SignUp/>
      },
      {
        path: '/signin',
        element: <SignIn/>
      },
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/deposit',
        element: <Deposit/>
      },
      {
        path: '/withdrawl',
        element: <Withdrawl/>
      },
      {
        path: '/change-PIN',
        element: <ChangePIN/>
      },
    ]

  }
])


createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <RouterProvider router={route} />
   </Provider>

)
