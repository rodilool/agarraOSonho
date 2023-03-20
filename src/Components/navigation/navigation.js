import React, { Component } from "react"
// import './contacts.css'
import { BrowserRouter as Router, Route, Routes, Switch, NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
      return (
        <nav>
            <div>
                <div className="navigation">
                    <h1>AgarraOSonho</h1>
                    <ul>
                      {/* <div className='changeTheme' onClick={clickChangeTheme}>  */}
                        {/* <p>{saveTheme} Theme</p> */}
                        {/* {themeIcon} */}
                      {/* </div> */}
                        <NavLink to='./home' exact className='firstNav'><li>Home</li></NavLink>
                        <NavLink to='./prices' className='middleNav'><li>Preços</li></NavLink>
                        <NavLink to='./home/contactos' className='lastNav'><li>Contacto</li></NavLink>
                    </ul>
                </div>
            </div>
        </nav>
      )
    }
  }
  