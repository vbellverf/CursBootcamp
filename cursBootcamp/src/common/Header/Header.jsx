import "./Header.css"
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import Search from '../../pages/Search/Search';


export default function Header() {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index) => {
        setActiveLink(index);
    }

    const handleSearch = (query) => {
        // Puedes realizar la lógica de búsqueda aquí, por ejemplo, redirigir a la página de búsqueda
        console.log(`Buscar películas con la consulta: ${query}`);
    };

    return (
        <nav className="HeaderDesign">
            <Link
                to="/popular"
                className={activeLink === 0 ? 'active' : ''}
                onClick={() => handleLinkClick(0)}
            >
                POPULAR
            </Link>

            <Link
                to="/topRated"
                className={activeLink === 1 ? 'active' : ''}
                onClick={() => handleLinkClick(1)}
            >
                TOP RATED
            </Link>

            <Link
                to="/"
                className={activeLink === 1 ? 'active' : ''}
                onClick={() => handleLinkClick(5)}
            >
                <img src={"./public/Home-icon.png"} alt="Inici" />
            </Link>


            <Link
                to="/upComing"
                className={activeLink === 2 ? 'active' : ''}
                onClick={() => handleLinkClick(2)}
            >
                UP COMING
            </Link>

            <Link
                to="/search"
                className={activeLink === 3 ? 'active' : ''}
                onClick={() => handleLinkClick(3)}
            >
                SEARCH
            </Link>

            

        </nav>
    );

};

/*
{ Agrega el componente de búsqueda }
<Search onSearch={handleSearch} />
*/