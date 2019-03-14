import React, { Component } from "react";
import "./show.css";

class Show extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    fetch(`http://localhost:3001/${this.props.match.params.name}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
    this.props.getHomework();
    this.props.history.push("/dashboard");
  }

  render() {
    let homework = this.props.homeworks.map((homework, key) => {
      if (homework.name === this.props.match.params.name) {
        return (
          <div className="homework" key={key}>
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
