import React, { Component } from 'react';
//import { findUserByID } from '../data/data-service.js';
import './home.css';
import { findById } from '../data/api.js';

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
    const id = this.props.match.params.id;
    findById(id)
      .then(res => {
        console.log(res);
        this.setState({user: res});
      })
      .catch(console.error);
  }

  handleChange = (event) => {
    this.setState({id: event.target.value});
  }

  handleClick = () => {
    findById(this.state.id)
      .then(res => {
        this.setState({showUser: res});
      })
      .catch(console.error);
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