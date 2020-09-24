import React, { Component } from 'react';
import './App.scss';
import Students from './component/students/Students';
import GroupContainer from './component/divideGroup/GroupContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDivided:false,
      groups:[],
      allStudents:[]
    };

  }

  divideRequest= () =>{

  }

  handleAddStudentSuccess(){
    this.getStudentList();
  }

   handleChangeTeamNameSuccess(){

  }

  componentDidMount() {
    this.getStudentList();
  }

  getStudentList(){
    const url = 'http://localhost:8080/trainees?grouped=false'
    fetch(url)
      .then(result => {
        return result.json()
      })
      .catch(error => {
        console.log(error);
      })
      .then(json => {
        this.setState({
          allStudents:json
        })
      })
  }


  render() {
    return (
      <div data-testid="app" className="App">
        <button className='btn-divide' onClick={this.divideRequest}>分组学员</button>
        {this.state.isDivided &&
        <GroupContainer groups={this.state.groups}
                        handleChangeTeamNameSuccess={this.handleChangeTeamNameSuccess.bind(this)} /> }
        <Students allStudents={this.state.allStudents}
                  handleAddStudentSuccess={this.handleAddStudentSuccess.bind(this)} />
      </div>
    );
  }
}

export default App;
