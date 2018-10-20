import React, { Component } from 'react';
import { Collapse,  CardBody, Card, Row} from 'reactstrap';
import ToggleComponent from './ToggleComponent'
import './evidence_component.css';

class EvidenceComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { 
        };
    }


    render() {

        var evidence_path = "./images/" + this.props.verified + ".svg"
        return (
            <div className="row evidenceCard">
                <div className="col-md-6 nopadding">
                    <h1>{this.props.tag}</h1>

                </div>
                <div className="col-md-6 nopadding">
                    <div className="evidenceCardDetail">
                        <h1>Public</h1>
                        <ToggleComponent public={this.props.public}/>
                        <img className="evidence_image" src={evidence_path}></img>
                    </div>
                </div>
            </div>


        );
    }
}

export default EvidenceComponent;