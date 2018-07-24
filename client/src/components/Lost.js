import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class Lost extends Component {
  render() {
      return (
        <Card>
          <CardContent>
            <h1> Wrong way, please go back!</h1>
          </CardContent>
        </Card>
      )
  }
}

export default Lost;
