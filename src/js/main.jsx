import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components


import Home from './components/Home';


let counter = 0

setInterval (() => {
  const First = Math.floor(counter / 1);
  const Second = Math.floor(counter / 10);
  const Third = Math.floor(counter / 100);
  const Fourth = Math.floor(counter / 1000);
  const Fifth = Math.floor(counter / 10000);
  const Sixth = Math.floor(counter /100000);
  counter++;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home FirstNumber={First} SecondNumber={Second} ThirdNumber={Third} FourthNumber={Fourth} FifthNumber={Fifth} SixthNumber={Sixth}/>
  </React.StrictMode>,
)
}, 1000)