import React, { Component } from "react";

class Show extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    console.log("delete method");
    console.log(this.props.match.params.name);
  }
  render() {
    let homework = this.props.homeworks.map((homework, key) => {
      if (homework.name === this.props.match.params.name) {
        return (
          <div key={key}>
            <h4>Name: {homework.name}</h4>
            <h4>Week: {homework.week}</h4>
            <h4>Completed: {homework.completed}</h4>
          </div>
        );
      }
    });
    return (
      <div>
        <h1>Homework</h1>
        {homework}
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Show;
