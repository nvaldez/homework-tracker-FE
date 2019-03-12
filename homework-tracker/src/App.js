import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Show from "./Show/Show";
import New from "./New/New";

const homeworks = [
  {
    name: "Control Flow Practice",
    week: "One",
    completed: "Yes"
  },
  {
    name: "Functions Practice",
    week: "Two",
    completed: "Yes"
  },
  {
    name: "Intro to MVC",
    week: "Four",
    completed: "No"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = { homeworks };
  }

  delete() {}

  // componentDidMount() {
  //   fetch("http://localhost:3001/")
  //     .then(res => res.json())
  //     .then(res => {
  //       // console.log(res)
  //       this.setState({ homeworks: res });
  //     });
  // }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            path="/dashboard"
            render={props => <Dashboard {...props} {...this.state} />}
          />
          <Route
            path="/show/:name"
            render={props => <Show {...props} {...this.state} />}
          />
          <Route
            path="/new"
            render={props => <New {...props} {...this.state} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
