import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx' // importamos el componente
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App /> // Cuando no tiene que envolver nada
)

/*

  Los elementos tienen que ser en PascalCase 
  Esto es porqué sino react intentará crear un elemento html tal cual,
  por ejemplo <buttonSpecial> </buttonSpecial>. Como no sabemos si mañana
  existirá un tal 'buttonSpecial', crearemos los elementos con PascalCase,
  para evitar colisiones. ButtonSpecial <--.

*/
