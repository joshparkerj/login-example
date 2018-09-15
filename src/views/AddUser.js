import React, { Component } from 'react';
import './adduser.css';
import { submitUser } from '../data/api.js';

class AddUser extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleClick = () => {
    console.log('submitting');
    console.log(this.state);
    submitUser(this.state);
  }

  render(){
    return (
      <div className="add-user">
        <label>First Name:</label>
        <input name="name" onChange={this.handleChange}/>
        <label>Email:</label>
        <input name="email" onChange={this.handleChange}/>
        <label>Password:</label>
        <input name="password" onChange={this.handleChange}/>
        <button onClick={this.handleClick}>submit</button>
      </div>
    )
  }
}

export default AddUser;