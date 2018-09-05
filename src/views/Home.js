import React, { Component } from 'react';
import { findUserByID } from '../data/data-service.js';
import './home.css';

class User extends Component {

  render() {
    if (!this.props.user) {
      return <div className="user">nothing to see here</div>;
    }
    return (
      <div className="user">
        <p>First Name: {this.props.user.firstName}</p>
        <p>Email: {this.props.user.email}</p>
        <p>Password: {this.props.user.password}</p>
        <p>User ID: {this.props.user.id}</p>
      </div>
    )
  }
}

class Home extends Component {
  state = {
    id: '',
    user: {},
    showUser: {}
  }

  componentDidMount () {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    const user = findUserByID(id);
    this.setState({ user });
  }

  handleChange = (event) => {
    this.setState({id: event.target.value});
  }

  handleClick = () => {
    this.setState({showUser: findUserByID(this.state.id)});
  }

  render() {
    if (!this.state.user) return <div> Loading...</div>
    if (!this.state.user.id) return <div> Loading...</div>
    return (
      <div>Hello from Home.js!
        <p>Hello {this.state.user.firstName}!</p>
        <input placeholder="id"
               value={this.state.id}
               onChange={this.handleChange}
               name="id" />
        <input type="submit"
               value="Submit"
               name="submit"
               onClick={this.handleClick} />
        <User user={this.state.showUser} />
      </div>
    )
  }
}

export default Home;