import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

  class Register extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        message: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this)

    }
    onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    }
  
    handleSubmit(e) {
      e.preventDefault();
      this.props.onCreate(this.state)
      console.log(this.state)
      }
  
    render () {
      const { name, email, password, confirmPassword, message } = this.state;
      return (
        <div className="container">
          <form className="form-signin" onSubmit={this.handleSubmit}>
          {message !== '' &&
              <div className="alert alert-warning alert-dismissible" role="alert">
                { message }
              </div>
            }
            <h5><Link to='/'>HomePage</Link></h5>
            <h2 className="form-signin-heading">Register</h2>
            <label htmlFor="inputName" className="sr-only">Name</label>
            <input type="text" className="form-control" placeholder="Name" name="name" value={name} onChange={this.onChange} required/>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" className="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
            <label htmlFor="inputConfirmPassword" className="sr-only">Password</label>
            <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={this.onChange} required/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
          </form>
        </div>
      );
    }
  }
  
  
export default Register