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
    axios.get(`${ process.env.REACT_APP_API_URL }/users/`+localStorage.id)
      .then(res => {
        this.setState({ user: res.data });
        console.log(this.state.user.user._id);
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

    axios.put(`${ process.env.REACT_APP_API_URL }`+this.props.match.params.id, { name, email })
      .then((result) => {
        this.props.history.push("/profile"+this.props.match.params.id)
      });
  }

  render() {
    console.log(this.state.user)
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
                <label for="isbn">Name:</label>
                <input type="text" class="form-control" name="name" value={this.state.user.name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">email:</label>
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