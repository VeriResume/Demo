import React, { Component } from 'react';
import { Collapse,  CardBody, Card } from 'reactstrap';
import './validation_component.css';
import EvidenceComponent from './EvidenceComponent';
import PlusModalEvidence from './PlusModalEvidence';
class ValidationComponent extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { 
            collapse: false
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        const evidence_display = this.props.verifiable_elements.map((evidence) => {
            return (
                <EvidenceComponent key={evidence.elemID} tag ={evidence.tag} public = {evidence.public} verified = {evidence.verified}>
                </EvidenceComponent>
            );
        });

        return (

            <div>
                <div className="placeCard">
                    <h1>{this.props.place}</h1>
                    <PlusModalEvidence collapse={this.state.collapse} experienceID={this.props.experienceID} selectedID={this.props.selectedID}/>
                    <img className="dropdown" onClick={this.toggle}  src={"./images/dropdown.svg"}></img> 
                </div>
                <Collapse className="constant_width" isOpen={this.state.collapse}>
                    <div className="evidence_drawer">
                        {evidence_display}
                    </div>
                </Collapse>
            </div>
        );
    }   
}

export default ValidationComponent;