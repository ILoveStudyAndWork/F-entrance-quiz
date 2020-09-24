import React from 'react';
import { Popover } from 'antd';
class Trainee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handelDelete = (id,name) => {
    const deleteTrainee = { id, name }
    this.props.handelDelete(deleteTrainee);
  }

  render() {
    const { name ,id, office, email, zoomId } = this.props.message;
    const content = `name:${name} id:${id} office:${office} email:${email} zoomId:${zoomId}`
    return (
      <Popover content={content}>
        <div className="student-card" onClick={() => this.handelDelete(id,name)}>
          <span>{id}</span>
          <span>{name}</span>
        </div>
      </Popover>

    );
  }
}

Trainee.propTypes = {};

export default Trainee;