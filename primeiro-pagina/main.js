import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Versionado minha aplicação web</h1>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mlhi3c1-CCxHUfHXIyILQe8Hhwv6JeuJsw&s" >  




  </div>
`

setupCounter(document.querySelector('#counter'))
