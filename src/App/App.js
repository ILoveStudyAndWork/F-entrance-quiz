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
    };

  }

  divideRequest= () =>{

  }


   handleChangeTeamNameSuccess(){

  }


  render() {
    return (
      <div data-testid="app" className="App">
        <button className='btn-divide' onClick={this.divideRequest}>分组学员</button>
        {this.state.isDivided &&
        <GroupContainer groups={this.state.groups}
                        handleChangeTeamNameSuccess={this.handleChangeTeamNameSuccess.bind(this)} /> }
        <TrainerContainer />
        <TraineeContainer history={this.props.history} />

      </div>
    );
  }
}

export default App;
