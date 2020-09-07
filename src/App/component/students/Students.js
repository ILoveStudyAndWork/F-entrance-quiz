import React from 'react';
import './students.css'
import StudentContainer from './StudentContainer';
class Students extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allStudents:[]
    };
  }

  componentDidMount() {
    const url = 'http://localhost:8080/students'
    fetch(url)
      .then(result => {
        console.log(result);
        return result.json()
      })
      .catch(error => {
        console.log(error);
      })
      .then(json => {
        this.setState({
          allStudents:json
        })
      })
  }

  render() {
    return (
      <div>
        <h1>学员列表</h1>
        <div className="student-container">
          <StudentContainer allStudents={this.state.allStudents}/>
        </div>
      </div>
      );
    }
}

export default Students;