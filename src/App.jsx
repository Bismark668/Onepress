import { NavBar } from './Conponents/NavBar'
import{BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css'
import { About } from './Pages/About'
import {Home} from './Pages/Home'
import {BlogsPage} from'./Pages/BlogsPage'
import { BlogContententpage } from './Pages/BlogContententpage'

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={< Home />}/>
          <Route path='/about' element={< About/>}/>
          {<Route path='/blogs' element={< BlogsPage />}/>}
          {<Route path='/blogscontent/:id' element={< BlogContententpage/> }/>}

        </Routes>
      </div>
    </BrowserRouter>
     
    </>
  )
}

export default App
