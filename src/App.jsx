import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

// lista de usuarios
const users = [
    {
        "userName": 'midudev',
        "name": 'Miguel Ángel Durán',
        "isFollowing": false
        /* uuid: nana --> Solo usarlo aquí si lo definimos aquí, no en otra parte
        algo único no aleatorio --> id de la base de datos */
    }
    // .. un montón de usuarios
];

// Primer componente creade en React
export function App() {

    // Podemos pasar como parámetro funciones
    // const formatUsername = (userName) => `@${userName}` Hacer esto es una mala práctica.
    // Si queremos cambiar el valor, crearemos otra variable con diferente nombre
    // pasamos la función como prop

    return (
        // los <> son React.Fragment (para renderizas varios elementos a la vez)

        // si pasamos el isFollowing sin nada, por defecto el valor será true. Si no le pasamos el isFollowing será undefined.

        // si le tenemos que pasar un false, le pasamos el isFollowing={false}

        // las props (los atributos que le pasamos al componente son imutables --> No puedo llegar y hacer un userName = "@sidney")

        // el initiarIsFollowing es una buena practiva para nombrar props que ya estén establecidas

        // para retornar cada elemento con la array de objetos
        // React no deja de ser JavaScript

        // usamos el userName porque es algo único. Tiene que ser algo único.
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
                            {/* Ponemos aquí algo si es como children, como el name */}
                        </TwitterFollowCard>
                    )
                })
            }

            { /* Comentario dentro del JSX */}

        </section>
    )
}

// Componente --> Factoria de elementos, función que al ejecutarla de devuelve un elemento.
// El elemento es lo que renderiza el componente. React renderiza elementos

/*
    <div>
        Hola <-- children (todo lo que envuelve)
    </div>
*/

// Renderizar lista de elementos

// Cuando hacemos fetch de una API, nos llegará un array de elementos