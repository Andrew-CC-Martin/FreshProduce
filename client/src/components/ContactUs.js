import React, { Component } from 'react';
import axios from 'axios';
import UpdateUser from "./UpdateUser";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './ContactUs.css';

class  Contactus extends Component {
  constructor () {
    super();
    this.state = {
        name: '',
        email: '',
        message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    //   console.log(this.state)
  }

    // async handleSubmit(e) {
    //     e.preventDefault();
    //     const { name, email, message } = this.state;
    //     const form = await axios.post(`${process.env.REACT_APP_API_URL}/contactus`, {
    //         name,
    //         email,
    //         message
    //     })
    //     this.props.history.push('/')
    // }


  handleSubmit= (e) => {
      e.preventDefault();
      const { name, email, message } = this.state;
      axios.post(`${process.env.REACT_APP_API_URL}/contactus`, {
          name,
          email,
          message
      }).then((response) => {
          if (response.data.msg === 'success'){
              alert("Message Sent.");
              this.resetForm()
          }else if(response.data.msg === 'fail'){
              alert("Message failed to send.")
          }
      })
      this.props.history.push('/')
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="contactUs">
        <div className="form-contactus">
          <form  onSubmit={this.handleSubmit}>
          <h2 className="form-contactus-heading">Contact Us</h2>
          <label htmlFor="inputName" className="sr-only">
            Name
          </label>
        <div className="field">
          <TextField
            id="name"
            name="name"
            label="Name"
            value={name}
            onChange={this.onChange}
            margin="normal"
            fullWidth
          />
        </div>
      <div className="field">
          <TextField
            id="email"
            name="email"
            label="Email Address"
            value={email}
            onChange={this.onChange}
            margin="normal"
            fullWidth
          />
      </div>
      <div className="field">
        <TextField
          id="message-input"
          label="Message"
          name="message"
          value={message}
          fullWidth
          multiline
          margin="normal"
          onChange={this.onChange}
          rowsMax="4"
        />
      </div>
          <Button color="primary" type="submit">
            Send Message
          </Button>
        </form >
        </div>
      </div>

      );
  }
}

export default Contactus;
