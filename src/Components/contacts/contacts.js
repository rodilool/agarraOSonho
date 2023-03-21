import React, { Component } from "react"
import './contacts.css';
import instaDark from './logos/instagram-dark.png'
import instaLight from './logos/instagram-light.png'
import emailDark from './logos/email-dark.png'
import emailLight from './logos/email-light.png'
import facebookDark from './logos/facebook-dark.png'
import facebookLight from './logos/facebook-light.png'
import phoneDark from './logos/phone-dark.png'
import phoneLight from './logos/phone-light.png'

const Contacts = (props) => {
      return (
        <div className="contacts" id="contacts">
            <h2>Contactos</h2>
            <div className="center">
                <div className="usContact">
                    <h3>Nós o contacta-mos:</h3>     
                        <form>
                            <div className="form horizontal">
                                <label for='firstName'>First Name:</label>
                                <input id='form' className='firstName' type='text' placeholder="First Name" required></input><br/>
                            </div>
                            <div className="form horizontal">
                                <label for='lastName'>Last Name:</label>
                                <input id='form' className='lastName' type='text' placeholder="Last Name" required></input><br/>
                            </div>
                            <div className="form horizontal">
                                <label for='phoneNumber'>Phone Number:</label>
                                <input id='form' className='phoneNumber' type='tel' placeholder="912345678" maxLength='9' required></input><br/>
                            </div>
                            <div className="form horizontal">
                                <label for='email'>E-Mail:</label>
                                <input id='form' className='email' type='email' placeholder="example@example.com" required></input><br/>
                            </div>
                            <input className= 'submit-button' type='submit'/>
                        </form>
                </div>
                
                <div className="socials">
                    <h3>Contacte-nos:</h3>
                    <div>
                    <div className='logo'>
                        {props.theme === 'Light' ? <img src={phoneLight}/> : <img src={phoneDark}/>}
                        <p>Phone</p> 
                    </div>

                    <div className='logo'>
                        {props.theme === 'Light' ? <img src={emailLight}/> : <img src={emailDark}/>}
                        <p>E-Mail</p>
                    </div>
                    <div className='logo'>
                        {props.theme === 'Light' ? <img src={instaLight}/> : <img src={instaDark}/>}
                        <p>Instagram</p>
                    </div>
                    <div className='logo'>
                        {props.theme === 'Light' ? <img src={facebookLight}/> : <img src={facebookDark}/>}
                        <p>Facebook</p> 
                    </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
      )
    }

export default Contacts;