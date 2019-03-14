import React, { Component } from "react";

class Edit extends Component {
  render() {
    return (
      <div>
        <h1>Update Homework</h1>
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

export default Edit;
