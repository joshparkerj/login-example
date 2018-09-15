import React, { Component } from 'react';
import './adduser.css';
import { submitUser } from '../data/api.js';
import { ToastContainer, toast } from 'react-toastify';

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
    submitUser(this.state);
    toast.success("Thank you!", {
      position: toast.POSITION.TOP_CENTER
    });
  }

  render(){
    return (
      <div className="add-user">
        <ToastContainer />
        <label>First Name:</label>
        <input name="name" onChange={this.handleChange}/><br/>
        <label>Email:</label>
        <input name="email" onChange={this.handleChange}/><br/>
        <label>Password:</label>
        <input name="password" onChange={this.handleChange}/><br/>
        <button onClick={this.handleClick}>submit</button>
      </div>
    )
  }
}

export default AddUser;