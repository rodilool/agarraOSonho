import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import sunLogo from './pics/sun.png';
import moonLogo from './pics/crescent-moon.png';
import { clear } from '@testing-library/user-event/dist/clear';
import { BrowserRouter as Router, Route, Routes, Switch, NavLink } from 'react-router-dom';

import Welcome from './Components/navigation/welcome/welcome';
import Contacts from './Components/contacts/contacts';


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
        <div className={`landing-${saveTheme} ${saveTheme} backGround`}>  
        <div>
        <nav>
            <div>
                
            </div>
                <div className={`navigation-${saveTheme}`}>
                    <h1>AgarraOSonho</h1>
                    <ul>
                      <div className='changeTheme' onClick={clickChangeTheme}> 
                        <p>{saveTheme} Theme</p>
                        {themeIcon}
                      </div>
                        <a href='#home' className='firstNav'><li>Home</li></a>
                        <a to='./prices' className='middleNav'><li>Portofolio</li></a>
                        <a href='#contacts' className='lastNav'><li>Contacto</li></a>
                    </ul>
                </div>

        </nav>
         <Welcome />
        </div>
          <div className={`contacts ${saveTheme} backGround`}>
            <Contacts theme={saveTheme}/>
          </div>
        
        </div>
  );
}
export default App;
