import React, { Component } from 'react';
import './App.scss';
import Students from './component/students/Students';
import DivideGroup from './component/divideGroup/DivideGroup';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDivided:false,
      groups:[]
    };

  }
  divideRequest= () =>{
    const url = 'http://localhost:8080/students/groups';
    fetch(url)
      .then(result => {
        return result.json()
      })
      .catch(error => {
      })
      .then(json =>{
          this.setState({
            groups:json,
            isDivided: true
          })
        }
      )
  }

  render() {
    return (
      <div data-testid="app" className="App">
        <button className='btn-divide' onClick={this.divideRequest}>分组学员</button>
        <DivideGroup groups={this.state.groups}/>
        <Students />
      </div>
    );
  }
}

export default App;
