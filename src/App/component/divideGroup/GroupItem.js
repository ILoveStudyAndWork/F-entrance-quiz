import React from 'react';
import Trainee from '../TraineeContainer/Trainee';

class GroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName:this.props.name,
    };
  }

  render() {
    const  allStudents = this.props.allStudents.map(
      item =>
        <Trainee id={item.id}
                 key={item.id}
                 name={item.name} />)
    return (
      <div>
        <div className='list-student-group'>
          <div className='list-header'>
            <input type="text"
                   className='input-group-name'
                   defaultValue={this.state.teamName}
                   onKeyDown={this.changeTeamName} />
          </div>
          <div className="student-list">
            {allStudents}
          </div>
        </div>
      </div>
    );
  }

  changeTeamName = () => {

  }
}

GroupItem.propTypes = {};

export default GroupItem;