import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Pokemon from './components/Pokemon'
import Navbarx from './components/Navbarx'
import Home from './components/Home'
import Notfound from './components/Notfound'

function App() {


  return (
    <>
    <BrowserRouter> 
    <Navbarx />
    <Routes>
      <Route path="/"element={<Home/>} />
        <Route path="/pokemon/:idx?" element={<Pokemon />}/>   
        <Route path="*" element={<Notfound/>} />           
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
