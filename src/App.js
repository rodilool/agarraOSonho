import logo from './logo.svg';
import './App.css';
import Nav, {clickChangeTheme} from './nav/nav';
import React, { useState } from 'react';
import sunLogo from './pics/sun.png';
import moonLogo from './pics/crescent-moon.png';

function App() {
  const [theme, setTheme] = useState('Light');
  
  const clickChangeTheme = () => {
    if (theme === 'Light') {
      setTheme('Dark')
    } else if(theme === 'Dark'){
      setTheme('Light')
    }
  }
  
  const themeIcon = theme === 'Light' ? <img src={sunLogo} className="themeLogo" onClick={clickChangeTheme}></img> : <img src={moonLogo} className="themeLogo" onClick={clickChangeTheme}></img>

  return (   
    <div className={`landing ${theme}`} >
        <nav>
            <div>
                <h1>AgarraOSonho</h1>
            </div>
            <div>
                <div className="navigation">
                    <ul>
                        <p>{theme} Theme</p>
                        {themeIcon}
                        <a href='#'><li>Home</li></a>
                        <a href='#'><li>Preços</li></a>
                        <a href='#'><li>Contacto</li></a>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}
export default App;
