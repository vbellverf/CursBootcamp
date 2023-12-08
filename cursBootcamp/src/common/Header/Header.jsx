import "./Header.css"
import { Link } from 'react-router-dom'

export default function Header () {

    return (
        <nav className="HeaderDesign">
            <Link to="/popular">POPULAR</Link>
            <Link to="/topRated">TOP RATED</Link>
            <Link to="/upComing">UP COMING</Link>
            <Link to="/search">SEARCH</Link>
        </nav>
    )
};


/*
return (
        <nav className="HeaderDesign">
            <Link to="/Todos">Todos</Link>
            <Link to="/BotonSuma">Boton Suma</Link> 
            <Link to="/VideoClub">VideoClub</Link>
        </nav>
    )
*/