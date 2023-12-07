import { useState } from 'react'
import './BotonSuma.css'

export default function BotonSuma () {
    const [clicks, setClicks] = useState(0);
    const [increaseBy, setInc] = useState(1);
    console.log ("increaseBy", increaseBy);

    return (
        <div>
            hola soy el boton suma
        </div>
    )
}