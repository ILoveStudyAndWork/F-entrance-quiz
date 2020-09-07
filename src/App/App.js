import React, { Component } from 'react';
import './App.scss';
import Students from './component/students/Students';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Students />
      </div>
    );
  }
}

export default App;
