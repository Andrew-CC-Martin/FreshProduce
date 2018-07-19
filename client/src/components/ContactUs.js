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




/* material design UI
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

const styles = {
  card: {
    minWidth: 275
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Input
            defaultValue="Hello world" //autofill information
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />

          <hr></hr>
          <Input
            placeholder="Message"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.button}
          >
            Confirm
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleCard);
*/
