import { Routes, Route, BrowserRouter } from "react-router-dom";
//import Todos from './pages/Todos/Todos'
//import BotonSuma from './pages/BotonSuma/BotonSuma'
import Popular from './pages/Popular/Popular'
import TopRated from './pages/TopRated/TopRated'
import Header from './common/Header/Header'
import UpComing from "./pages/UpComing/UpComing";

// Desactivem el arxiu css
//import './App.css'

//Instal·lar: npm i react-router-dom

function App() {
  return (
    <main> 
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <section>
          <Routes>
            <Route path="/popular" element={<Popular />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/upcoming" element={<UpComing />} />
            <Route path="*" element={<h1 style={ {textAlign: 'center'} }>Pàgina en Construcció</h1>} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>  
  )
}

export default App
