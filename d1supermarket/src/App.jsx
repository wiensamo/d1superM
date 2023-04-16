import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from './components/header/header'
import Home from './components/home/Home'
import About from './components/about/About'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header/> 
        <Home />
        <About />
    </div>
  )
}

export default App
