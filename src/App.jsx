import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div className='flex flex-col justify-center items-center min-w-[100vw] min-h-[100vh]'>
      <Outlet />
      </div>
    </>
  )
}

export default App
