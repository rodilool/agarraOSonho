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
import { Alert } from "@mui/material";
import Button from '@mui/material/Button';
import { EventHandler } from "react";

export default class Contacts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: this.props.theme,
        }
    }
    onSubmit(event) {
        alert('Form Sent!')
        var frm = document.getElementById('form')
        frm.submit()
        frm.reset()
        event.preventDefault();

    }
    render(){
      return (
        <div className="contacts" id="contacts">
            <h2>Contactos</h2>
            <div className="center">
                <div className="usContact">
                    <h3>Nós o contacta-mos:</h3>     
                        <form id="form" onSubmit={this.onSubmit}>
                            <div className="form horizontal">
                                <label htmlFor='firstName'>First Name:</label>
                                <input id='form' className='firstName' type='text' placeholder="First Name" required></input><br/>
                            </div>
                            <div className="form horizontal">
                                <label htmlFor='lastName'>Last Name:</label>
                                <input id='form' className='lastName' type='text' placeholder="Last Name" required></input><br/>
                            </div>
                            <div className="form horizontal">
                                <label htmlFor='phoneNumber'>Phone Number:</label>
                                <input id='form' className='phoneNumber' type='tel' placeholder="912345678" maxLength='9' required></input><br/>
                            </div>
                            <div className="form horizontal">
                                <label htmlFor='email'>E-Mail:</label>
                                <input id='form' className='email' type='email' placeholder="example@example.com" required></input><br/>
                            </div>
                            <button className= 'submit-button' 
                            type='submit'
                            >Submit</button>
                            <p id="log"></p>
                        </form>
                </div>
                
                <div className="socials">
                    <h3>Contacte-nos:</h3>
                    <div>
                    <div className='logo'>
                        {this.props.theme === 'Light' ? <img src={phoneLight}/> : <img src={phoneDark}/>}
                        <p>Phone</p> 
                    </div>

                    <div className='logo'>
                        {this.props.theme === 'Light' ? <img src={emailLight}/> : <img src={emailDark}/>}
                        <a href="mailto:rodilool2@gmail.com"><p href="mailto:rodilool2@gmail.com">E-Mail</p></a>
                    </div>
                    <div className='logo'>
                        {this.props.theme === 'Light' ? <img src={instaLight}/> : <img src={instaDark}/>}
                        <p>Instagram</p>
                    </div>
                    <div className='logo'>
                        {this.props.theme === 'Light' ? <img src={facebookLight}/> : <img src={facebookDark}/>}
                        <p>Facebook</p> 
                    </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
      )    
      }
    }
