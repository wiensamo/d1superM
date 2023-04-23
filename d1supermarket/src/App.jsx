import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Login from './components/login/Login';
import CarrucelInicio from './components/pagina inicio/CarrucelInicio';
import Detail from './components/producto/detail/Detail';
import Producto, { ListProductos } from './components/producto/list producto/ListProductos';
import HeaderLogeado from './components/header/headerlogeado'
import Sidebar from './components/Sidebar/Sidebar'

import ProductoForm from './components/producto/creacion producto/ProductForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        
        <Sidebar/>
        
        
    </div>
  )
}

export default App
