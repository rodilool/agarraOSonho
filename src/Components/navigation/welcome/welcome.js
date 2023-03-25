import React, { Component } from 'react'
import './welcome.css'
import workerImage from '../../../pics/industrial_worker_PNG11441.png'

export default class Welcome extends Component {
  render() {
    return (
      <div id='home' className='WelcomePage'>
            <div className='aboutUs'>
                <div>
                    <h2>Quem somos nós?</h2>
                    <p className='paragraphCenter'>
                    Bill Huey + Associates is a full service architecture firm. 
                    Our mission is to provide excellent service to our clients by listening to their dreams and desires and creating designs tailored to them. 
                    We believe that thoughtful, well detailed architecture can enrich lives.
                    </p>
                </div>
                <img src={workerImage}></img>
            </div>            
        </div>   

    )
  }
}
