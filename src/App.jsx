import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';  
import { Dashboard } from './pages/Dashboard';
import { Products } from './pages/Products';
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Home' element={<Dashboard />} />
        <Route path='/Products' element={<Products/>} />
      </Routes>
    </>
  )
}

export default App
