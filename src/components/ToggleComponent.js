import React, {Component} from 'react';
import {render} from 'react-dom';
import Switch from 'react-toggle-switch'
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css" 
import "./ToggleComponent.css" 

class ToggleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: this.props.public
    };
  }
 
  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  };
 
  render() {
    return (
        <Switch onClick={this.toggleSwitch} on={this.state.switched} />
    );
  }
 
}
 
export default ToggleComponent;