import React, { Component } from 'react';
import { USER } from '../user.js';
import ValidationComponent from './ValidationComponent';
import PlusModalText from './PlusModalText';

import {connect} from 'react-redux';

import './validation.css';
import { addSection, addExperience} from '../redux/ActionCreators'
import { dispatch } from 'rxjs/internal/observable/range';

const mapStateToProps = state => {
    return {
        user: state
    }
}

const mapDispatchToProps = (dispatch) => ({
    addSection: (name) => dispatch(addSection(name)),
    addExperience: (name, section) => dispatch(addExperience(name,section))

});

class Validation extends Component {

    constructor(props) {
        super(props);
        this.onNextSelect = this.onNextSelect.bind(this);
        this.onPrevSelect = this.onPrevSelect.bind(this);

        this.state = {
            selectedSection: 0
        }
    }

    onNextSelect() {
        var next = (this.state.selectedSection + 1) % this.props.user.length;
        this.setState({selectedSection : next});
    }

    onPrevSelect() {
        var next = this.state.selectedSection - 1;

        if (next == -1) {
            next = this.props.user.length - 1;
        }
        this.setState({selectedSection : next});
    }

    render() {
        console.log(this.props.user)
        var relevant_section = this.props.user[this.state.selectedSection];
        var section_display = <div></div>
        var selectedID = undefined;
        if (typeof relevant_section === 'undefined') {
            relevant_section = {}
            relevant_section.name = ""
        }
        else {
            selectedID = relevant_section._id;

            section_display = relevant_section.experiences.map((experience) => {
                return (
                    <ValidationComponent key={experience._id} place={experience.place} experienceID={experience._id} selectedID={selectedID} verifiable_elements={experience.verifiable_elements} >
                    </ValidationComponent>
                );
            });
        }
        return (
            <div className="container">
                <div className="section_navigation">
                    <div className="inner_navigation_holder">
                        <img className="section_arrow_left" onClick={this.onPrevSelect} src={"./images/left.svg"}></img>
                        <img className="section_arrow_right" onClick={this.onNextSelect} src={"./images/right.svg"}></img>
                        <h1>{relevant_section.name}</h1>

                    </div>
                    <div className="plus_sign_section">
                        <PlusModalText addFunction={this.props.addSection} key_func='section'/>
                    </div>
                </div>
                {section_display}
                <br></br>
                <div className="plus_sign_experience">
                    <PlusModalText addFunction={this.props.addExperience} key_func='experience' selectedID={selectedID}/>
                </div>

            </div>
        );
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(Validation));