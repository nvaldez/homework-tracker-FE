import React, { Component } from "react";

class New extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      week: "",
      completed: ""
    };
    this.handleName = this.handleName.bind(this);
    this.handleWeek = this.handleWeek.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleName(evt) {
    this.setState({ name: evt.target.value });
  }
  handleWeek(evt) {
    this.setState({ week: evt.target.value });
  }
  handleCompleted(evt) {
    this.setState({ completed: evt.target.value });
  }

  handleSubmit() {
    let data = this.state;
    fetch("http://localhost:3001/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => console.log("Success:", JSON.stringify(response)))
      .catch(error => console.error("Error:", error));
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <h1>New is working</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleName}
          placeholder="Homework Name"
        />
        <label htmlFor="name">Week</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleWeek}
          placeholder="Homework Week"
        />
        <label htmlFor="name">Completed</label>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleCompleted}
          placeholder="Homework Completed"
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default New;
