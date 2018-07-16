import React, { Component } from 'react';
import {Form, FormGroup, Input, Label, Button } from 'reactstrap'
import axios from 'axios';


class  ContactUs extends Component {
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
    
    async handleSubmit(e) {
        e.preventDefault();
        const { name, email, message } = this.state;
        const form = await axios.post(`${process.env.REACT_APP_API_URL}/user/form`, {
            name,
            email,
            message
        })
    }

    render() { 
        return (
            <Form onSubmit={this.handleSubmit} style={{width: '600px', marginLeft: '20%'}} >
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input
                        type="textarea"
                        name="message"
                        onChange={this.handleChange} />
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form >
          );
    }
}
 
export default ContactUs;