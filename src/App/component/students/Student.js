import React from 'react';
class Student extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
        <div className="student-card">
          <span>{this.props.id}.</span>
          <span>{this.props.name}</span>
        </div>
    );
  }
}

Student.propTypes = {};

export default Student;