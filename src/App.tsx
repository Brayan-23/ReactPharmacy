import './App.css'
import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
     <ToastContainer />
     <div className='min-h-[80vh]'>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
     </div>
     <Footer />
    </>
  )
}

export default App
