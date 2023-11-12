//para estados
import { useState } from 'react';

// Para valores por defecto
export function TwitterFollowCard({ userName, name = "unknown", initialIsFollowing}) {

    //const state = userState(false) // devuelve array de 2 posiciones
    //const isFollowing = state[0]; // es estado en sí
    //const setIsFollowing = state[1]; // función que permite cambiar el estado

    // es lo mismo que arriba pero más corte (Desesctructuración)
    // utilizar una prop para inicializar un estado (estado inicial de nuestro componente)
    // este estado solo se inicializa una vez si usas una prop y además es una mala práctica.
    // el estado inicial de la App no se propaga a los elementos hijo.
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing); // para que cuando entre en Twitter y ya esté siguiendo a una persona, no me ponga Seguir

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
                    className='tw-followCard-img'
                    alt="El avatar de sxdny" src={`https://unavatar.io/${userName}`} />
                <div className='tw-followCard-div'>
                    <strong className='tw-followCard-strong'>{name}</strong>
                    <span className='tw-followCard-span'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
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

// const midudev = {isFollowing: true, userName: 'midudev'}
// <TwitterFollowCards {...midudev} --> Donde midudev sea un objeto que contenga todas las props --> Seria absolutamente lo mismo y puede ser útil para según que cosas
// **** Esto es una mala practica ****
// **** Mejor ser bastante declarativo y hacerlo de la forma normal ****

// Renderizado condicional

// cada vez que la aplicación cambia su estado, todos los componente de abajo se actualizan (los cambios se propagan de arriba a abajo). No se actualiza en el DOM pero si en el React.
