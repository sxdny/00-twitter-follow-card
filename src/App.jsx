import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

const users = [
    {
        "userName": 'midudev',
        "name": 'Miguel Ángel Durán',
        "isFollowing": false
        /* uuid: nana --> Solo usarlo aquí si lo definimos aquí, no en otra parte
        algo único no aleatorio --> p.e id de la base de datos */
    }
];

export function App() {

    return (
        <section className='App'>
            {
                users.map(user => {
                    {/* Para cada usuario extraemos esta info */}
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                            name={name}
                        >
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
