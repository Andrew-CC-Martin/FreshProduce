import React from 'react'
import { Table, Button, Form, FormGroup, Input } from 'reactstrap'
import App from '../App';

class CartItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <Table>
        <tbody>
          <tr>
            <td>
              <Button onClick={event => this.props.deleteRow(this.props.cartObject.id, event)} color="danger">X</Button>
            </td>
            <td>
              <img src={this.props.cartObject.imgUrl} width="100" />
            </td>
            <td>{this.props.cartObject.name}</td>
            <td>${this.props.cartObject.price}</td>
            <td>
              <Button onClick={event => this.props.removeOne(this.props.cartObject.id, event)}>-</Button>
              &nbsp;&nbsp;&nbsp;{this.props.cartObject.quantity}&nbsp;&nbsp;&nbsp;
              <Button onClick={event => this.props.addOne(this.props.cartObject.id, event)}>+</Button>
            </td>
            <td>${this.props.cartObject.quantity * this.props.cartObject.price}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default CartItem