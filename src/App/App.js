import React, { Component } from 'react';
import './App.scss';
import 'antd/dist/antd.min.css';
import TraineeContainer from './component/TraineeContainer/TraineeContainer';
import GroupContainer from './component/divideGroup/GroupContainer';
import TrainerContainer from './component/TrainerContainer/TrainerContainer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDivided:false,
      groups:[],
      allTrainees:[],
      allTrainers:[]
    };

  }

  divideRequest= () =>{

  }

  handleAddTraineeSuccess(){
    this.getTraineeList();
  }

   handleChangeTeamNameSuccess(){

  }

  handleAddTrainerSuccess(){
    this.getTrainerList();
  }

  componentDidMount() {
    this.getTraineeList();
    this.getTrainerList();
  }

  getTraineeList(){
    const url = 'http://localhost:8080/trainees?grouped=false'
    fetch(url)
      .then(result => {
        return result.json()
      })
      .catch(Error)
      .then(json => {
        this.setState({
          allTrainees:json
        })
      })
  }


  getTrainerList(){
    const url = 'http://localhost:8080/trainers?grouped=false'
    fetch(url)
      .then(result => {
        return result.json()
      })
      .catch(Error)
      .then(json => {
        this.setState({
          allTrainers:json
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
        <TrainerContainer allTrainers={this.state.allTrainers}
                          handleAddTrainerSuccess={this.handleAddTrainerSuccess.bind(this)} />
        <TraineeContainer allTrainees={this.state.allTrainees}
                          handleAddTraineeSuccess={this.handleAddTraineeSuccess.bind(this)} />

      </div>
    );
  }
}

export default App;
