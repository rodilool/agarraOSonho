import logo from './logo.svg';
import './App.css';
import Nav, {clickChangeTheme} from './nav/nav';
import React, { useEffect, useState } from 'react';
import sunLogo from './pics/sun.png';
import moonLogo from './pics/crescent-moon.png';
import { clear } from '@testing-library/user-event/dist/clear';

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
  let idk;

  if (!saveTheme) {
    idk = theme
  } else {
    idk = saveTheme
  }
  

  const themeIcon = idk === 'Light' ? <img src={sunLogo} className="themeLogo" onClick={clickChangeTheme}></img> : <img src={moonLogo} className="themeLogo" onClick={clickChangeTheme}></img>

  return (   
    <div className={`landing ${idk}`} >
        <nav>
            <div>
                <h1>AgarraOSonho</h1>
            </div>
            <div>
                <div className="navigation">
                    <ul>
                      <div className='changeTheme' onClick={clickChangeTheme}> 
                        <p>{idk} Theme</p>
                        {themeIcon}
                      </div>
                        <a href='#' className='firstNav'><li>Home</li></a>
                        <a href='#' className='middleNav'><li>Preços</li></a>
                        <a href='#' className='lastNav'><li>Contacto</li></a>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}
export default App;
