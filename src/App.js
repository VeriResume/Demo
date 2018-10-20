import React, { Component } from 'react';
import VRHeader from './components/VRHeader';
import Resume from './components/Resume';
import VRFooter from './components/VRFooter';
import Validation from './components/Validation';
import { Provider } from 'react-redux'
import { ConfigureStore} from './redux/configureStore'
import './App.css';

const store = ConfigureStore();


class App extends Component {

  render() {
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
