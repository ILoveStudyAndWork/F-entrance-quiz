import React from 'react'
import { List } from 'antd';
import Student from '../students/Student';
class GroupItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    return (
      <List
        bordered
        headers={this.props.name}
        dataSource={this.props.students}
        renderItem={item => (<Student id={item.id} key={item.id} name={item.name}/>
        )}
      />
    );
  }
}

GroupItem.propTypes = {};

export default GroupItem;