import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './header.css';

class VRHeader extends Component {

    render() {

        return (
          <div className="VRHeaderBox">
            <a href = "https://www.veriresume.co/"><img className="hamburger_nav" src={"./images/hamburgernav.svg"}></img></a>
            <a href = "https://www.veriresume.co/"><img className="VRLogo" src={"./images/logo.svg"}></img></a>
          </div>
        );
    }
}

export default VRHeader;