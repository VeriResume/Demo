import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./PlusModalEvidence.css" 
import ReactDropzone from "react-dropzone";
import { Control, LocalForm, Errors } from 'react-redux-form';
import {connect} from 'react-redux';
import { addElement} from '../redux/ActionCreators'
import { dispatch } from 'rxjs/internal/observable/range';



const mapStateToProps = state => {
  return {
  }
}


const mapDispatchToProps = (dispatch) => ({
  addElement: (name, section, experience) => dispatch(addElement(name,section,experience))

});


class PlusModalEvidence extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false ,
      text: ""

    };

    this.toggle = this.toggle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;

    this.setState({
      text : value
    });
  }

  handleSubmit(values, selectedID, experienceID) {
      this.props.addElement(values.text, selectedID, experienceID);
      this.toggle();
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {

    return (
      <div>
        <img className= { this.props.collapse ? "plus_sign_verifiable" : "plus_sign_verifiable_gone" } onClick={this.toggle} src={"./images/plus-button.svg"}></img>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal_dialog_text modal-transparent">
          <div className = "evidence_box">
            <h1>Add Verification</h1>
            <ReactDropzone className ="dropbox"  onDrop={this.onDrop}>
              <img className="upload_img" src={"./images/upload.svg"}></img>
              <h1 className="upload_text">Drag Here</h1>
            </ReactDropzone>
            <LocalForm onSubmit={(values) => this.handleSubmit(values, this.props.selectedID, this.props.experienceID)}>
                <Control.text type="text" className="modal_text_evidence_input form-control" model=".text" id="Text" placeholder="Type Ahead" onChange={this.handleInputChange}/>
                <Button type="submit" className="submit_button_evidence">Submit</Button>

            </LocalForm>
          </div>
        </Modal>
      </div>
    );
  }
}

export default (connect( mapStateToProps,mapDispatchToProps)(PlusModalEvidence));