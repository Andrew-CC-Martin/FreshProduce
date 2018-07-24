import React, { Component } from 'react';
import axios from 'axios';

import UpdateUser from "./UpdateUser";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

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

  handleChange = (e) => {
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
      return (
        <Card>
          <CardContent>
            <Input
              type="name"
              defaultValue={this.state.user} //autofill information or put label
              placeholder="Name"
              onChange={this.handleChange}
              fullWidth={true}
            />
            <Input
              type="email"
              defaultValue="{email}"
              placeholder="Email"
              onChange={this.handleChange} required
              fullWidth={true}
            />
            <Input
              type="message"
              placeholder="Message"
              onChange={this.handleChange}
              fullWidth={true}
              multiline={true}
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth={true}
              onClick={this.handleSubmit}>
              Confirm
            </Button>
          </CardActions>
        </Card>
      );
  }
}

export default Contactus;
