import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './footer.css';

class VRFooter extends Component {

    render() {

        return (
          <div className="VRFooterBox">
            <img className="VRFooter" src={"./images/footer.svg"}></img>
          </div>
        );
    }
}

export default VRFooter;