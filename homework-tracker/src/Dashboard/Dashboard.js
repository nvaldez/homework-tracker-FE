import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

class Dashboard extends Component {
  render() {
    let homeworks = this.props.homeworks.map((homework, key) => {
      return (
        <div className="dashboard" key={key}>
          <Link to={"/show/" + homework.name}>
            <h4>{homework.name}</h4>
          </Link>
        </div>
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
