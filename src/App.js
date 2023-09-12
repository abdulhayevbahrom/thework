import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/Home'
import Vacancy from './routes/vacancy/Vacancy'
import Staff from './routes/staff/Staff'
import AdminLogin from './components/adminLogin/AdminLogin'
import FormInfo from './components/FormInfo/FormInfo'

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/vacancy' element={<Vacancy />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/login' element={<AdminLogin />} />
        <Route path='/create' element={<FormInfo />} />

      </Routes>
    </div>
  )
}

export default App
