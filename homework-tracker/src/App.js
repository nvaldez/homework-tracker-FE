import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import Show from "./Show/Show";
import New from "./New/New";

class App extends Component {
  constructor() {
    super();
    this.state = { homeworks: [] };

    this.getHomework = this.getHomework.bind(this);
  }

  delete() {}

  componentDidMount() {
    this.getHomework();
  }
  getHomework() {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        this.setState({ homeworks: res });
      });
  }

  render() {
    return (
      <div className="App">
        <nav className="App-header">
          <Link to="/dashboard">HOME</Link>
          <Link to="/new">ADD HOMEWORKD</Link>
        </nav>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Dashboard {...props} {...this.state} />}
          />
          <Route
            path="/dashboard"
            render={props => <Dashboard {...props} {...this.state} />}
          />
          <Route
            path="/show/:name"
            render={props => (
              <Show {...props} {...this.state} getHomework={this.getHomework} />
            )}
          />
          <Route
            path="/new"
            render={props => (
              <New {...props} {...this.state} getHomework={this.getHomework} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
