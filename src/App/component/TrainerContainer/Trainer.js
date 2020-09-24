import React from 'react';

class Trainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }
  handelDelete = () => {
    this.props.handelDelete(this.props.message);
  }

  render() {
    const { id, name} = this.props.message;
    return (
        <div className="student-card" onClick={this.handelDelete}>
          <span>{id}.</span>
          <span>{name}</span>
        </div>

    );
  }
}

Trainer.propTypes = {};

export default Trainer;