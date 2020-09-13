import React from 'react';
import './students.css'
import StudentContainer from './StudentContainer';
class Students extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <h1>学员列表</h1>
        <div className="student-container">
          <StudentContainer allStudents={this.props.allStudents}
                            handleAddStudentSuccess={this.props.handleAddStudentSuccess}/>
        </div>
      </div>
      );
    }
}

export default Students;