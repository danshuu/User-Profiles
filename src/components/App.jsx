import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Profile from "./Profile";

class App extends Component {
  state = {
    list: [],
    searchInput: "",
    token: "",
    doneFetching: true
  };

  fetchData(url) {
    this.setState({ doneFetching: false });
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          list: data.result,
          token: data.token ? `?token=${data.token}` : "",
          doneFetching: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.setState({
      token: ""
    });
    this.fetchData(
      `https://appsheettest1.azurewebsites.net/sample/list${this.state.token}`
    );
  }

  handleChange = event => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <TextField
          id="outlined-with-placeholder"
          placeholder="Search Name"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange}
          disabled={!this.state.doneFetching}
        />
        {this.state.list.map((item, index) => (
          <Profile
            id={item}
            searchName={this.state.searchInput}
            key={index + Math.random()}
          />
        ))}
        {this.state.token && (
          <button
            onClick={() =>
              this.fetchData(
                `https://appsheettest1.azurewebsites.net/sample/list${
                  this.state.token
                }`
              )
            }
          >
            NEXT PAGE
          </button>
        )}
      </div>
    );
  }
}

export default App;
