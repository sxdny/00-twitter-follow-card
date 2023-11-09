//para estados
import { useState } from 'react';

// Para valores por defecto
export function TwitterFollowCard({ userName, name = "unknown"}) {

    //const state = userState(false) // devuelve array de 2 posiciones
    //const isFollowing = state[0]; // es estado en sí
    //const setIsFollowing = state[1]; // función que permite cambiar el estado

    // es lo mismo que arriba pero más corte (Desectructuración)
    const [isFollowing, setIsFollowing] = useState(false);

    // al darle click, cambiamos el estado
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button isFollowing'
        : 'tw-followCard-button'
    
    return (
        // utilizamos className y no class porqué como el jsx se convierte en js y en js hay una palabra reservada class, pues no se puede usar.
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-img' alt="El avatar de sxdny" src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-div'>
                    <strong className='tw-followCard-strong'>{name}</strong>
                    <span className='tw-followCard-span'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}

// Las {} significa evaluar

// lo que puedes hacer aquí es pasar children como parámetro y usarlo dentro de los elementos del componente. React sabrá si es un texto, un array, lo que sea.

// Para campos libres y muy extensibles

// Ejemplo:
// Dentro de <aside /> --> poner un children (Seguir)
/*
    <div>
        Hola <--children
    </div>

    En el componente:

    <span> children == "Hola" </span>
*/

// <TwitterFollowCards {...midudev} --> Donde midudev sea un objeto que contenga todas las props --> Seria absolutamente lo mismo y puede ser útil para según que cosas

// Renderizado condicional
