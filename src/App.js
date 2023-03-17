import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import sunLogo from './pics/sun.png';
import moonLogo from './pics/crescent-moon.png';
import { clear } from '@testing-library/user-event/dist/clear';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './Components/welcome';


function App() {

  const [theme, setTheme] = useState('Light');
  // localStorage.clear()
  const clickChangeTheme = () => {
    if(theme === 'Light') {
      setTheme('Dark')
      localStorage.setItem('theme', JSON.stringify(theme))
    } else {
      setTheme('Light')
      localStorage.setItem('theme', JSON.stringify(theme))
    }
  }

  let storedTheme = localStorage.getItem('theme');
  let saveTheme = JSON.parse(storedTheme);


  const themeIcon = saveTheme === 'Light' ? <img src={sunLogo} className="themeLogo" onClick={clickChangeTheme}></img> : <img src={moonLogo} className="themeLogo" onClick={clickChangeTheme}></img>

  return (   
    <Router >
        <div className={`landing ${saveTheme} backGround`}> 
        <nav>
            <div>
                
            </div>
            <div>
                <div className="navigation">
                    <h1>AgarraOSonho</h1>
                    <ul>
                      <div className='changeTheme' onClick={clickChangeTheme}> 
                        <p>{saveTheme} Theme</p>
                        {themeIcon}
                      </div>
                        <a href='#' className='firstNav'><li>Home</li></a>
                        <a href='#' className='middleNav'><li>Preços</li></a>
                        <a href='#' className='lastNav'><li>Contacto</li></a>
                    </ul>
                </div>
            </div>
        </nav>
        <body>
          <Welcome className='center'/>
        </body>
        </div>
    </Router>
  );
}
export default App;
