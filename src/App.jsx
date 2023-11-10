import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

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
        <section className='App'>
            <TwitterFollowCard userName={"sxdny"} name={"Sidney Silva"} ></TwitterFollowCard>

            <TwitterFollowCard userName={"unknownsergi"} name={"Sergi Camps"} ></TwitterFollowCard>

            <TwitterFollowCard userName={"elonmusk"} name={"Elon Musk"} ></TwitterFollowCard>

            <TwitterFollowCard userName={"MaxCandace"} name={"Máximo Candás"} ></TwitterFollowCard>

            <TwitterFollowCard userName={"josegm120"} name={"Jose"} ></TwitterFollowCard>

            <TwitterFollowCard userName={"torvalds"} name={"Linus Torvalds"} ></TwitterFollowCard>

            <TwitterFollowCard userName={"midudev"} name={"Miguel Ángel Durán"} ></TwitterFollowCard>

            <TwitterFollowCard userName={"linux"} name={"Linux"} ></TwitterFollowCard>

            <TwitterFollowCard userName={"apple"} name={"Apple Inc."} ></TwitterFollowCard>

            <TwitterFollowCard userName={"brasil"} name={"Brasil"} ></TwitterFollowCard>

            <TwitterFollowCard userName={"sidney"} name={"Sidney"}  ></TwitterFollowCard>

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