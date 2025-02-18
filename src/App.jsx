import './App.css'
import { Route, Routes, UNSAFE_RouteContext } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './layout/footer'


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Error />}/>
    </Routes>
    <Footer/>
    </>
  )
}
export default App
