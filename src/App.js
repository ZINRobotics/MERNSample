import React, { Component } from 'react';
import CheckBoxComponent from './components/checkBoxComponent'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>MERN (Mongo Express React Node)</p><p>Example</p>
        </header>
        <CheckBoxComponent/>
      </div>
    );
  }
}

export default App;
