import { Routes, Route, BrowserRouter } from "react-router-dom";
//import Todos from './pages/Todos/Todos'
//import BotonSuma from './pages/BotonSuma/BotonSuma'
import Popular from './pages/Popular/Popular'
import Header from './common/Header/Header'

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
            <Route path="*" element={<h1 style={ {textAlign: 'center'} }>Pàgina en Construcció</h1>} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>  
  )
}

export default App
