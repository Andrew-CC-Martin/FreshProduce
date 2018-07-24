import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: ''
    };
  }
  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

    axios
      .post(`${process.env.REACT_APP_API_URL}/users/login`, { email, password })
      .then(result => {
        console.log(result.data);
        localStorage.setItem('jwtToken', result.data.token);
        localStorage.setItem('name', result.data.name);
        localStorage.setItem('id', result.data._id);
        this.setState({ message: '' });
        window.location.reload();
        this.props.history.push('/')
        // window.location.assign('/');
        console.log(localStorage);
      })
      .catch(e => {
        `${process.env.REACT_APP_API_URL}/users/login`;
        let msg = e.response.data;
        if (e.response.status === 400) {
          this.setState({ message: msg });
        }
      });
  };

  render() {
    const { email, password, message } = this.state;
    return (

      <div className="login">
        <form className="form-user" onSubmit={this.onSubmit}>
          {message !== '' && (
            <div className="alert alert-warning alert-dismissible" role="alert">
              {message}
            </div>
          )}
          <h2 className="form-signin-heading">Login </h2>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <div className="field">
          <TextField
            id="email"
            name="email"
            label="Email Address"
            value={email}
            onChange={this.onChange}
            required
            margin="normal"
          />
        </div>
        <div className="field">
          <TextField
            id="password-input"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={this.onChange}
            required
            margin="normal"
          />
        </div>
            <Button color="primary" type="submit">
              Login
              </Button>
          {/* <input
            type="email"
            className="form-control"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={this.onChange}
            required
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={password}
            onChange={this.onChange}
            required
          />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Login
          </button> */}
          <p>
            <Link to="/forgotpass" className='forgot-pass-link message'>Forgot Password?</Link>
          </p>
          <p>
            Not a member?{' '}
            <Link to="/register">
              <span
                className="glyphicon glyphicon-plus-sign"
                aria-hidden="true"
              />{' '}
              Register here
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
