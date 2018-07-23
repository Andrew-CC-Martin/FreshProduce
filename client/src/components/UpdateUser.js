import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class UpdateUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    // console.log(this.props)
    axios.get(`${ process.env.REACT_APP_API_URL }/users/`+this.props.match.params.id)
      .then(res => {
        this.setState({ user: res.data.user });
      });
  }

  onChange(e) {
    const state = this.state.user
    state[e.target.name] = e.target.value;
    this.setState({user:state});
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.user._id === localStorage.id) {
    axios.patch(`${ process.env.REACT_APP_API_URL }/users/`+this.props.match.params.id, this.state.user)
      .then((result) => {
        this.props.history.push("/profile")
      });
  } else {
    this.props.history.push("/unauthorized")
  }}

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Update Your Details
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.user.name} onChange={e => this.onChange(e)} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="email">email:</label>
                <input type="email" class="form-control" name="email" value={this.state.user.email} onChange={e => this.onChange(e)} placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="company">company:</label>
                <input type="company" class="form-control" name="company" value={this.state.user.company} onChange={e => this.onChange(e)} placeholder="Company" />
              </div> 
              <div class="form-group">
                <label for="address">address:</label>
                <input type="address" class="form-control" name="address" value={this.state.user.address} onChange={e => this.onChange(e)} placeholder="Address" />
              </div>
              <div class="form-group">
                <label for="deliveryInstructions">Delivery Instructions:</label>
                <input type="deliveryInstructions" class="form-control" name="deliveryInstructions" value={this.state.user.deliveryInstructions} onChange={e => this.onChange(e)} placeholder="Delivery Instructions" />
              </div>
              <div class="form-group">
                <label for="phoneNumber">Phone Number:</label>
                <input type="phoneNumber" class="form-control" name="phoneNumber" value={this.state.user.phoneNumber} onChange={e => this.onChange(e)} placeholder="Phone Number" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateUser;