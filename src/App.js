import React, { Component } from 'react';
import VRHeader from './components/VRHeader';
import Resume from './components/Resume';
import VRFooter from './components/VRFooter';
import Validation from './components/Validation';
import { Provider } from 'react-redux'
import { ConfigureStore} from './redux/configureStore'
import './App.css';

let store;


class App extends Component {

  constructor(props){
    super(props)
    this.state = { store: undefined }
  }
  // 
  componentDidMount() {
    fetch('https://veriresume-backend.herokuapp.com/sections').then((data) => data.json()).then((data) => {
        store = ConfigureStore(data)
        this.setState({store: store})
      });
  }

  render() {
    if (typeof this.state.store === 'undefined') {
      return (null);
    }
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <VRHeader/>      
          <div className="row">  
            <div className="col-md-12 col-lg-6">
              <Resume/>
            </div>
            <div className="col-md-12 col-lg-6">
              <Validation/>
            </div>
          </div>
          <VRFooter/>      
        </div>
      </Provider>
    );
  }
}


export default App;
