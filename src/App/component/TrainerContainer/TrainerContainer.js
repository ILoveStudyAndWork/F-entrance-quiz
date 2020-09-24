import React from "react";
import Trainer from './Trainer';
class TrainerContainer extends React.Component {
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

  addrTrainer = (event) =>  {
    const ENTER_KEY_CODE = 13;
    const HTTP_CREATE = 201;
    const requestBody = `{\"name\":\"${event.target.value}\"}`
    if (event.keyCode === ENTER_KEY_CODE){
      const url = 'http://localhost:8080/trainers'
      const options = {
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body:requestBody
      }

      fetch(url, options)
        .then(response => {
          if (response.status === HTTP_CREATE){
            this.props.handleAddTrainerSuccess();
          }
          this.setState({
            addButtonHide:false,
          })
        }).catch(Error)

    }
  }

  render() {
    const  allTrainers = this.props.allTrainers.map(
      item =>
        <Trainer id={item.id}
                 key={item.id}
                 name={item.name} />)
    return (
      <div>
        <h1>讲师列表</h1>
        <div className="student-container">
          <div className="student-list">
            {allTrainers}
            {this.state.addButtonHide ? <input type="text"
                                               className='input-add-stu'
                                               onKeyDown={this.addrTrainer}/>
              : <button className='btn-add-stu'
                        onClick={this.handleAddButtonClick}>+ 添加讲师
              </button>}
          </div>
        </div>
      </div>
    );
  }
}

TrainerContainer.propTypes = {};

export default TrainerContainer;