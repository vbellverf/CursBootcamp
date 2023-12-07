import { Routes, Route, BrowserRouter } from "react-router-dom";
import Todos from './pages/Todos/Todos'
import BotonSuma from './pages/BotonSuma/BotonSuma'
import Popular from './pages/Popular/Popular'
import Header from './common/Header/Header'

// Desactivem el arxiu css
//import './App.css'

//Instal·lar: npm i react-router-dom

function App() {
  return (
    <div> 
      <Popular />
    </div>  
  )
}

export default App



/*
function App() {
  return (
    <main> 
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <section>
          <Routes>
            <Route path="/" element={ <></> } />
            <Route path="/Todos" element={ <Todos /> } />
            <Route path="/BotonSuma" element={ <BotonSuma />} />
            <Route path="/Videoclub" element={<Popular />} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>  
  )
}

export default App
*/