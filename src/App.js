import React, { Component } from "react";
import "./app.css";
import Form from "./components/form/Form";
import ListRepos from "./components/list-repos/ListRepos";
import ErrorBox from "./components/error-box/ErrorBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: '',
      reposList: [],
      errorText: ''
    }
  }

  handleUserInput = (e) => {
    e.preventDefault();
    this.setState({ userInput: e.target.value });
  }

  handleSubmit = () => {
    if (this.state.userInput.length > 0) {
      this.getRepos(this.state.userInput);
    } else {
      this.setState({  
        errorText: "Please, enter a username!"
      })
    }
  }

  handleEnterClick = (e) => {
    if (e.keyCode === 13) {
      this.handleSubmit();
    }
  }

  getRepos = (userInput) => {
    this.setState({ reposList: [], errorText: '' });
    
    fetch(`https://api.github.com/users/${userInput}/repos`)
    .then((resp) => {
      if (!resp.ok) {
        // document.getElementById('username').value = '';
        this.setState({userInput : ''});
        throw new Error("No user found!");
      }
      return resp.json();
    }) 
    .then((data) => {
      if(data.length > 0) {
        this.setState({reposList: data});
      } else {
        this.setState({ 
          errorText: "No repositories found!",
        })
      }
    })
    .catch((err) => {
      this.setState({ 
        errorText: err.message
      })
    })
  }

  render() {
    return (
      <div id="container">
        <h6 className="h6 display-6">Find repositories of a particular person</h6>
        <Form 
          userInput={this.state.userInput}
          handleUserInput={this.handleUserInput}
          handleSubmit={this.handleSubmit}
          handleEnterClick={this.handleEnterClick}
        />
        <ListRepos 
          reposList={this.state.reposList}
        />
        <ErrorBox 
          errorText={this.state.errorText}
        />
      </div>
    );
  }
}

export default App;
