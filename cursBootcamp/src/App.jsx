import { Routes, Route, BrowserRouter } from "react-router-dom";
import Popular from './pages/Popular/Popular'
import TopRated from './pages/TopRated/TopRated'
import Header from './common/Header/Header'
import UpComing from "./pages/UpComing/UpComing";
import Principal from "./pages/Principal/Principal"
import Search from "./pages/Search/Search"
import MovieDetails from "./pages/MovieDetails/MovieDetails";
//import './App.css'

function App() {
  return (
    <main> 
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/toprated" element={<TopRated />} />
            <Route path="/upcoming" element={<UpComing />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<h1 style={ {textAlign: 'center'} }>Pàgina en Construcció</h1>} />
          </Routes>
        </section>
      </BrowserRouter>
    </main>  
  )
}

export default App
