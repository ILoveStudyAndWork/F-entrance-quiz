import Student from './Student';
import React from 'react';

class StudentContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addButtonHide: false,
    };
  }

  handleAddButtonClick = () => {
    this.setState({
      addButtonHide: true,
    })
  }


   addStudent = () =>  {

  }

  render() {
    const  allStudents = this.props.allStudents.map(
      item =>
        <Student id={item.id}
                 key={item.id}
                 name={item.name} />)

    return <div className="student-list">
      {allStudents}
      {this.state.addButtonHide ? <input type="text"
                                         className='input-add-stu'
                                         onKeyDown={this.addStudent}/>
                                 : <button className='btn-add-stu'
                                           onClick={this.handleAddButtonClick}>+ 添加学员
                                    </button>}

    </div>
  }

}

StudentContainer.propTypes = {};

export default StudentContainer;