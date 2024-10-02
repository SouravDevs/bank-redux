import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'


function App() {
  return (
    <>
    <Header />
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center overflow-hidden'>
    <Outlet />
    </div>
    </>
  )
}

export default App
