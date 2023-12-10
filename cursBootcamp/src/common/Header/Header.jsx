import "./Header.css"
import { Link } from 'react-router-dom'
import React, { useState } from 'react';


export default function Header () {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (index) => {
      setActiveLink(index);
    }

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
--------------------------------------------------------------------------
return (
        <nav className="HeaderDesign">
            <Link to="/Todos">Todos</Link>
            <Link to="/BotonSuma">Boton Suma</Link> 
            <Link to="/VideoClub">VideoClub</Link>
        </nav>
    )
*/