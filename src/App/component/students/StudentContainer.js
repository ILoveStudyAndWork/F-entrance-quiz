import Student from './Student';
import React from 'react';

class StudentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return this.props.allStudents.map(item =>
      <Student id={item.id}
               key={item.id}
               name={item.name} />)
  }
}

StudentContainer.propTypes = {};

export default StudentContainer;