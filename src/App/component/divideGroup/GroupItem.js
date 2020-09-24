import React from 'react';
import StudentGroup from './StudentGroup';

class GroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName:this.props.name,
    };
  }

  render() {
    return (
      <div>
        <div className='list-student-group'>
          <div className='list-header'>

            <input type="text"
                   className='input-group-name'
                   defaultValue={this.state.teamName}
                   onKeyDown={this.changeTeamName} />
          </div>
          <StudentGroup allStudents={this.props.students}
                            name={this.props.name}/>
        </div>
      </div>
    );
  }

  changeTeamName = () => {

  }
}

GroupItem.propTypes = {};

export default GroupItem;