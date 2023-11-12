import React, { Component } from 'react'

import Social from '../components/Social'

class Contact extends Component {
    render() {
        return(
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email : s6303051633093@kmutnb.ac.th</h3>
                <h3>Instagram : @2pnthegreat</h3>
                <Social />
            </div>
        );
    }
}

export default Contact;