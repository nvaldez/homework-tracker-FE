import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    let homeworks = this.props.homeworks.map((homework, key) => {
      return (
        <Link to={"/show/" + homework.name} key={key}>
          <h4>{homework.name}</h4>
        </Link>
      );
    });
    return (
      <div>
        <h1>List of Homework</h1>
        {homeworks}
      </div>
    );
  }
}

export default Dashboard;
