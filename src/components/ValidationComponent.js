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
                <EvidenceComponent key={evidence.get('elemID')} tag ={evidence.get('tag')} public = {evidence.get('public')} verified = {evidence.get('verified')}>
                </EvidenceComponent>
            );
        });

        return (
            <div>
                <div className="placeCard">
                    <h1>{this.props.place}</h1>
                    <PlusModalEvidence collapse={this.state.collapse}/>
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