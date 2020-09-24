import React from 'react'
import GroupItem from './GroupItem';
import './GroupContainer.css'

class GroupContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const groupList = this.props.groups.map(item =>
    {
      const { studentList, groupName, id} = item;
      return <GroupItem students={studentList}
                        key={groupName}
                        id={id}
                        name={groupName}
                        handleChangeTeamNameSuccess={this.props.handleChangeTeamNameSuccess}/>
    })
    return (
      <div>
        <h1>分组列表</h1>
        {groupList}
      </div>
    );
  }
}

GroupContainer.propTypes = {};

export default GroupContainer;