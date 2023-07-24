import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ironhackLogo from './assets/ironhack-logo-xs.png'
import menuLogo from './assets/menu-top-xs.png'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div id = "upper">
        <div className = "navIcon">
        <img className = "logo1" src={ironhackLogo} alt="ironhackLogo" />
        <img className = "logo2" src={menuLogo} alt="menuLogo" />
        </div>
        <div id = "text">
        <h2 id = "reactJS">Say hello to <br />ReactJS</h2>
        <p id = "downText">You will learn how to use <br /> 
         the most popular frontend library, <br /> 
         and become a super Ninja developer</p> <br />
         <p id = "block">Awesome!</p>
        </div>
        </div>
         <div className='icons'>
          <div>
          <img className = "footerIcons" src={icon1} alt="icon1" />
          <h3>Declarative</h3>
          <p>React makes it <br />painless to create <br />interactive Uls</p>
          </div>
          <div>
          <img className = "footerIcons" src={icon2} alt="icon2" />
          <h3>Components</h3>
          <p>Build encapsulated <br />componenets that<br /> manage their state.</p>
          </div>
          <div>
          <img className = "footerIcons" src={icon3} alt="icon3" />
          <h3>Single-Way</h3>
          <p>A set of inmutable <br />values are passed to <br />the component's</p>
          </div>
          <div>
          <img className = "footerIcons" src={icon4} alt="icon4" />
          <h3>JSX</h3>
          <p>Statically-typed, <br /> designed to run on <br />modern browsers</p>
          </div>
         </div>
      </div>
      
    </>
  )
}

export default App
