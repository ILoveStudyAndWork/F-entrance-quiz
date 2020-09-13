import Student from '../students/Student';
import React from 'react';

class StudentGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const  allStudents = this.props.allStudents.map(
      item =>
        <Student id={item.id}
                 key={item.id}
                 name={item.name} />)

    return <div className="student-list">
      {allStudents}

    </div>
  }


}

StudentGroup.propTypes = {};

export default StudentGroup;