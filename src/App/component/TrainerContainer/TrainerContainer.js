import React from "react";
import Trainer from './Trainer';
import Modal from 'antd/es/modal';
class TrainerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addButtonHide: false,
      allTrainers:[],
      deleteModalVisible:false,
      deleteTrainer:'',
    };

  }

  handleCancel = () => {
    this.setState({
      deleteModalVisible: false,
    });
  };


  handelDelete = (trainer) => {
    this.setState({
      deleteModalVisible: true,
      deleteTrainer:trainer,
    });
  }

  deleteTrainer = ()=> {
    const { id } = this.state.deleteTrainer;
    const url = `http://localhost:8080/trainers/${id}`
    const options = {
      method:'DELETE'
    }
    fetch(url, options)
      .then(response => {
        if (response.status === 204){
          this.getTrainerList();
        }
      })
      .catch(Error)
    this.setState({
      deleteModalVisible: false,
    });
  }

  handleAddTrainerSuccess(){
    this.getTrainerList();
  }

  handleAddButtonClick = () => {
    this.setState({
      addButtonHide: true,
    })
  }

  componentDidMount() {
    this.getTrainerList();
  }


  getTrainerList(){
    const url = 'http://localhost:8080/trainers?grouped=false'
    fetch(url)
      .then(result => {
        return result.json()
      })
      .catch(Error)
      .then(json => {
        this.setState({
          allTrainers:json
        })
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
            this.handleAddTrainerSuccess();
          }
          this.setState({
            addButtonHide:false,
          })
        }).catch(Error)

    }
  }

  render() {
    const  allTrainers = this.state.allTrainers.map(
      item =>
        <Trainer message={item}
                 key={item.id}
                 handelDelete={this.handelDelete}/>)
    const { id ,name } = this.state.deleteTrainer;
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
        <Modal
          title="删除讲师"
          visible={this.state.deleteModalVisible}
          onOk={this.deleteTrainer}
          onCancel={this.handleCancel}
        >
          <p>是否要删除讲师{id}.{name}？</p>
        </Modal>
      </div>
    );
  }
}

TrainerContainer.propTypes = {};

export default TrainerContainer;