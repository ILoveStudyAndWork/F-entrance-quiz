import Student from './Student';
import React from 'react';

class StudentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  addStudent() {

  }

  render() {
    const  allStudents = this.props.allStudents.map(
      item =>
        <Student id={item.id}
                 key={item.id}
                 name={item.name} />)

    return <div className="student-container">
      {allStudents}

    </div>
  }


}

StudentContainer.propTypes = {};

export default StudentContainer;