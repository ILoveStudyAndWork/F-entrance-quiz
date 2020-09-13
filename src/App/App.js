import React, { Component } from 'react';
import './App.scss';
import Students from './component/students/Students';
import GroupContainer from './component/divideGroup/GroupContainer';

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
    const options = {
      method:'POST'
    }
    fetch(url, options)
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
        <GroupContainer groups={this.state.groups}/>
        <Students />
      </div>
    );
  }
}

export default App;
