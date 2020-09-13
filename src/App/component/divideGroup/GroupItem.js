import React from 'react'
import StudentContainer from '../students/StudentContainer';
class GroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className='list-student-group'>
          <div className='list-header'><p>{this.props.name}</p></div>
          <StudentContainer allStudents={this.props.students}
                            name={this.props.name}/>
        </div>
      </div>
    );
  }
}

GroupItem.propTypes = {};

export default GroupItem;