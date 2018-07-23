import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import './Register.css';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

  class Register extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        message: '',
        company: '',
        address: '',
        delivery_instructions: ''
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
      const { name, email, password, confirmPassword, message, company, address, delivery_instructions } = this.state;
      return (
        <div className="register">
          <form className="form-user" onSubmit={this.handleSubmit}>
          {message !== '' &&
              <div className="alert alert-warning alert-dismissible" role="alert">
                { message }
              </div>
            }
          <div className="registerHeader">
            <h2>Register Today! </h2>
          </div>
          <div className="field">
            <TextField 
            id="name"
            name="name"
            label="Name"
            value={name}
            onChange={this.onChange}
            required
            margin="normal"
            />
          </div>
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
            id="password"
            name="password"
            label="Password"
            type="password"
            value={password}
            onChange={this.onChange}
            required
            margin="normal"
            />
          </div>
          <div className="field">
            <TextField 
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={this.onChange}
            required
            margin="normal"
            />
          </div>
          <div className="field">
            <TextField 
            id="company"
            name="company"
            label="Company"
            value={company}
            onChange={this.onChange}
            required
            margin="normal"
            />
          </div>
          <div className="field">
            <TextField
            id="address"
            name="address"
            label="Address"
            value={address}
            onChange={this.onChange}
            required
            margin="normal"
            />
          </div>
          <div className="field">
            <TextField
            id="deliery_instructions"
            name="delivery_instructions"
            label="Delivery Instructions"
            value={delivery_instructions}
            onChange={this.onChange}
            margin="normal"
            />
          </div>
            <br />
             <Button color="light" type="submit">
              Register
              </Button>
            {/* <h5><Link to='/'>HomePage</Link></h5>
            <h2 className="form-signin-heading">Register</h2>
            <label htmlFor="inputName" className="sr-only">Name</label>
            <input type="text" className="form-control" placeholder="Name" name="name" value={name} onChange={this.onChange} required/>
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" className="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
            <label htmlFor="inputConfirmPassword" className="sr-only">Password</label>
            <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" value={confirmPassword} onChange={this.onChange} required/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button> */}
          </form>
        
        </div>
      );
    }
  }
  
  
export default Register