import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import sunLogo from './pics/sun.png';
import moonLogo from './pics/crescent-moon.png';
import { clear } from '@testing-library/user-event/dist/clear';
import { BrowserRouter as Router, Route, Routes, Switch, NavLink } from 'react-router-dom';

import Welcome from './Components/navigation/welcome/welcome';
import Contacts from './Components/contacts/contacts';
import Portofolio from './Components/portofolio/portofolio';
import Footer from './Components/footer/footer.js';


function App() {

  const [theme, setTheme] = useState('Light');
  // localStorage.clear()
  // It will store the theme that the user selects so once they refresh they dont go back to default

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

// It wil choose the logo depending on what theme user is on
  const themeIcon = saveTheme === 'Light' ? <img src={sunLogo} className="themeLogo" onClick={clickChangeTheme}></img> : <img src={moonLogo} className="themeLogo" onClick={clickChangeTheme}></img>

  return (   
        <div className={`text-${saveTheme}`}>  
        <div className={`landing-${saveTheme} ${saveTheme} backGround`}>
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
                        <a href='#home' className='firstNav'><li>Sobre</li></a>
                        <a href='#portfolio' className='middleNav'><li>Portofolio</li></a>
                        <a href='#contacts' className='lastNav'><li>Contacto</li></a>
                    </ul>
                </div>
                <div className={`menu-${saveTheme}`}>
                  <div className='centerdiv'>
                    <h1>AgarraOSonho</h1>
                  </div>
                  <nav className='nav'>
                      <input type="checkbox" id="hamburger-input" class="burger-shower" />
                      <label id={`hamburger-menu-${saveTheme}`} for="hamburger-input">
                      <nav id={`sidebar-menu-${saveTheme}`}>
                          <h3>Menu</h3>
                          <p className='exit'>X</p>
                          <ul>
                          <a href="#home"><li>Sobre</li></a>
                          <a href="#portfolio"><li>Portfolio</li></a>
                          <a href="#contacts"><li>Contacto</li></a>
                          <div className='changeTheme' onClick={clickChangeTheme}> 
                            <p>{saveTheme} Theme</p>
                            {themeIcon}
                          </div>
                          </ul>
                      </nav>
                      </label>

                      <div class="overlay"></div>
                  </nav>
                </div>

        </nav>
         <Welcome />
        </div>         
          <div className={`Portofolio`}  id='portfolio'>
            <h2>Portfolio</h2>
            <Portofolio />
          </div>
          <div className={`contacts ${saveTheme} backGround`}>
            <Contacts theme={saveTheme}/>
          </div>
          <div className='footer'>
            <Footer/>
          </div>
        </div>
  );
}
export default App;
