import { Routes, Route, BrowserRouter } from "react-router-dom";
import Todos from './pages/Todos/Todos'
import BotonSuma from './pages/BotonSuma/BotonSuma'
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
            <Route path="/" element={ <></> } />
            <Route path="/Todos" element={ <Todos /> } />
            <Route path="/BotonSuma" element={ <BotonSuma />} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>  
  )
}

export default App
