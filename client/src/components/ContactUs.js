import React, { Component } from 'react';
import {Form, FormGroup, Input, Label, Button } from 'reactstrap'
import axios from 'axios';


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
            <Form onSubmit={this.handleSubmit} style={{width: '600px', marginLeft: '30%'}} >
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
                        onChange={this.handleChange} required />
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
 
export default Contactus;