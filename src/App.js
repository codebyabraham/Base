import React from 'react'
import './App.css';
import bgpattern from './bg-pattern-desktop.svg'
import logo from './logo.svg'
import hero from './hero-desktop.jpg'




function App() {
  return (
   <>
   <div class="main-container">
        <div class="right-container">
            <img src={bgpattern}alt=""/>
            <img src={logo}alt="" id="top-left"/>
            <h2 class="middle-left"> <p class="middle-top-left">W E'R E</p><br/>
             <p class="middle-bottom-left">C O M I N G <br/> S O O N </p></h2>
            <p class="note">Hello fellow shoppers! We're currently building our new <br/>fashion store. Add your email below to stay up-to-date with <br/> announcements and our launch details</p>
        </div>
             <img src={hero} alt=""/>
    </div>
   </>
  )
}

export default App
