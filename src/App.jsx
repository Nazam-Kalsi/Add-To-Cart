import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {Outlet} from 'react-router-dom';
import { CartcontextProvider } from './Context/OrderContext';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CartcontextProvider>
     <Header/>
     <Outlet/>
     <Footer/>
    </CartcontextProvider>
    </>
  )
}

export default App
