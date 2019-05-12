import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      number: "",
      photo: "",
      bio: ""
    };
  }
  componentDidMount() {
    // console.log(this.props.location.state.id);
    fetch(
      `https://appsheettest1.azurewebsites.net/sample/detail/${this.props.id ||
        this.props.location.state.id}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          name: data.name,
          age: data.age,
          number: data.number,
          photo:
            data.photo ||
            "https://www.blakleysflooring.com/wp-content/uploads/2016/03/Placeholder.png",
          bio: data.bio
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.number &&
          (!this.props.searchName ||
            this.state.name.includes(this.props.searchName.toLowerCase())) &&
          /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(this.state.number) && (
            <div
              onClick={() => {
                console.log(this.props);
                this.props.history.push({
                  pathname: `/profile/${this.props.id}`,
                  state: { id: this.props.id }
                });
              }}
            >
              <hr />
              <div style={{ height: "20%" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ width: "25%" }}>
                    <img
                      alt=""
                      src={this.state.photo}
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                      width: "75%"
                    }}
                  >
                    <span>Name: {this.state.name}</span>
                    <span>Age: {this.state.age}</span>
                    <span>Number: {this.state.number}</span>
                    <p>Bio: {this.state.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
      </div>
    );
  }
}

export default withRouter(Profile);
