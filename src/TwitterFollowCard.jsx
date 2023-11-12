import { useState } from 'react';

// Para valores por defecto
export function TwitterFollowCard({ userName, name = "unknown", initialIsFollowing}) {

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


