import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Step1 from './components/Step1'
import Step2 from './components/Step2'
import Step3 from './components/Step3'
import SignupFlow from './SignUpFlow'

function App() {

  return (
    <>
      {/* <h2>Welcome to Spider Web</h2> */}
      {/* <Routes> */}
        {/* <Route path='/' element={<Step1 />} />
        <Route path='/' element={<Step2 />} />
        <Route path='/' element={<Step3 />} /> */}
        {/* <SignupFlow />
        <Route path='/contact' element={<Contact />} />
        </Routes> */}

      <div className='App'>
        <SignupFlow />

      </div>
    </>
  )
}

export default App
