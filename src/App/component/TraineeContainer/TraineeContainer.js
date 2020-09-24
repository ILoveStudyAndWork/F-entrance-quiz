import React from 'react';
import './students.css'
import Trainee from './Trainee';
class TraineeContainer extends React.Component {
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


  addTrainee = () =>  {
  }

  render() {
    const  allTrainees = this.props.allTrainees.map(
      item => <Trainee message={item} key={item.id} />

)
    return (
      <div>
        <h1>学员列表</h1>
        <div className="student-container">
          <div className="student-list">
            {allTrainees}
            {this.state.addButtonHide ? <input type="text"
                                               className='input-add-stu'
                                               onKeyDown={this.addTrainee}/>
              : <button className='btn-add-stu'
                        onClick={this.handleAddButtonClick}>+ 添加学员
              </button>}

          </div>
        </div>
      </div>
      );
    }
}

export default TraineeContainer;