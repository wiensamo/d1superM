import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import CarrucelInicio from './components/pagina inicio/CarrucelInicio';
import Detail from './components/producto/detail/Detail';
import InicioPortal from './components/inicio portal/img/InicioPortal';
import ProductForm from './components/producto/creacion producto/ProductForm';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header/> 
        <Detail/>
        <ProductForm/>
        <Footer/>
    </div>
  )
}

export default App
