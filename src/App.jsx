import Home from './Home'
import About from './pages/About'
import Biography from './pages/Biography'
import Sacrifice from './pages/Sacrifice'
import { Route, Routes } from 'react-router-dom'
import Suits from './pages/Suits'




const App = () => {
  return (
    <>
      <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/biography' element={<Biography/>}/>
            <Route path='/suits' element={<Suits/>}/>
            <Route path='/sacrifice' element={<Sacrifice/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
