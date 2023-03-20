import React, { Component } from "react"
import './contacts.css'


export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div className="contacts">
            <h2>Contactos</h2>
            <div className="center">
                <div className="form">
                    <form>
                        <input id='Name' type='text' placeholder="First Name"></input><br/>
                        <input id='Name' type='text' placeholder="Last Name"></input><br/>
                        <input id='Name' type='text' placeholder='Phone Number'></input>
                    </form>
                </div>
                <div className="socials">
                    {this.theme}
                    <p>Instagram</p>
                    <p>Mail To</p>
                    <p>Facebook</p>
                    <p>Phone</p>
                </div>
            </div>
        </div>
      )
    }
}