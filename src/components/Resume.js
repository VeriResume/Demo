import React, { Component } from 'react';
import { Media } from 'reactstrap';
import './resume.css';

class Resume extends Component {

    render() {

        return (
            <object className="ResumePDF" data="../images/alex_pariseau.pdf" type="application/pdf" >
            </object>
        );
    }
}

export default Resume;