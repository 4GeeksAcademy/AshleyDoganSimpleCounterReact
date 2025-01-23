import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components


import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home FirstNumber={2} SecondNumber={3} ThirdNumber={4} FourthNumber={4} FifthNumber={5} SixthNumber={6}/>
  </React.StrictMode>,
)
