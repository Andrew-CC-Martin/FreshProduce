import React, { Component } from 'react';
import {Form, FormGroup, Input, Label, Button } from 'reactstrap'


class  ContactUs extends Component {
    state = {  }
    render() { 
        return (
            <Form>
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
                <button>Submit</button>
            </Form>
          );
    }
}
 
export default ContactUs;