import React from 'react';
import { Button, Modal } from 'reactstrap';
import "./PlusModalText.css" 
import { Control, LocalForm, Errors } from 'react-redux-form';
import { dispatch } from 'rxjs/internal/observable/range';


class PlusModalText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
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

handleSubmit(values, selectedID) {
    if (this.props.key_func === 'section') {
      this.props.addFunction(values.text);
    }
    else {
      console.log(selectedID)
      this.props.addFunction(values.text, selectedID);
    }
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
        <img className="plus_sign_text" onClick={this.toggle} src={"./images/plus-button.svg"}></img>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal_dialog_text modal-transparent">
            <LocalForm onSubmit={(values) => this.handleSubmit(values, this.props.selectedID)}>
                <Control.text type="text" className="modal_text_input form-control" model=".text" id="Text" placeholder="Type Ahead" onChange={this.handleInputChange}/>
                <Button type="submit" className="submit_button">Submit</Button>

            </LocalForm>


        </Modal>
      </div>
    );
  }
}

export default PlusModalText;