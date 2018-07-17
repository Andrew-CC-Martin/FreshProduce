import React from 'react'
import { Table } from 'reactstrap'

class CartItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <Table>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>{this.props.cartObject.name}</td>
            <td>${this.props.cartObject.price}</td>
            <td>{this.props.cartObject.quantity}</td>
            <td>${this.props.cartObject.quantity * this.props.cartObject.price}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default CartItem