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
        console.log(this.state.user);
      });
  }

  onChange = (e) => {
    const state = this.state.user
    state[e.target.name] = e.target.value;
    this.setState({user:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email } = this.state.user;
    console.log(this.state.user)
    console.log(this.props.match)
    axios.patch(`${ process.env.REACT_APP_API_URL }/users/`+this.props.match.params.id, { name, email })
      .then((result) => {

      console.log(result)
        this.props.history.push("/profile")
      });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              EDIT USER
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/profile/${this.state.user._id}`}><span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> User List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.user.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="email">email:</label>
                <input type="email" class="form-control" name="email" value={this.state.user.email} onChange={this.onChange} placeholder="Email" />
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