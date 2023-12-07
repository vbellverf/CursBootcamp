import "./Header.css"
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'

export default function Header () {

    return (
        <nav className="HeaderDesign">
            <Link to="/Todos">Todos</Link>
            <Link to="/BotonSuma">Boton Suma</Link> 
        </nav>
    )
}