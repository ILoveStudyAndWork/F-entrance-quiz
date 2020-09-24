import React from 'react';

class Trainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return (
        <div className="student-card">
          <span>{this.props.id}</span>
          <span>{this.props.name}</span>
        </div>

    );
  }
}

Trainer.propTypes = {};

export default Trainer;