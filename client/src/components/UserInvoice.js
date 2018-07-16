import React, { Component } from 'react';
import {Form, FormGroup, Input, Label, Button } from 'reactstrap'
import axios from 'axios';


class  UserInvoice extends Component {
    constructor () {
    super();
    this.state = { 
        name: '',
        email: ''
    }
    // this.handleSubmit = this.handleSubmit.bind(this)
}

    handleChange = (e) => {
      const state = this.state
      state[e.target.name] = e.target.value;
      this.setState(state);
    //   console.log(this.state)
    }
    
    handleSubmit= (e) => {
        e.preventDefault();
        const { name, email } = this.state;
        axios.post(`${process.env.REACT_APP_API_URL}/user/inv`, {
            name,
            email,
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
            <Form onSubmit={this.handleSubmit} style={{width: '600px', marginLeft: '20%'}} >
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="eamail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="message">INVOICE COMPONENT</Label>
                    
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </Form >
          );
    }
}
 
export default UserInvoice;