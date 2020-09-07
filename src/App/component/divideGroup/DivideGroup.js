import React from 'react'
import GroupItem from './GroupItem';
import './DivideGroup.css'
class DivideGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDivided:false,
    };
  }

  render() {
    const groupList = this.props.groups.map(item =>
    {
      const { students, groupName} = item;
      return <GroupItem students={students}
                        key={groupName}
                        name={groupName}/>
    })
    return (
      <div>
        <h1>分组列表</h1>
        {groupList}
      </div>
    );
  }
}

DivideGroup.propTypes = {};

export default DivideGroup;