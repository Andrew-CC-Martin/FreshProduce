import React from 'react';
import CartInput from './CartInput'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter'
import Paper from '@material-ui/core/Paper';
import Button from  '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'
import { FormControl } from '../../node_modules/@material-ui/core';
import TextField from '@material-ui/core/TextField'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartObject: this.props.getCart()
    }
  }

  // handleChange(event) {
  //   const value = +event.target.value
  //   console.log(`handleChange triggered; value=${value}`)
  //   if(isNaN(value) || value < 0 || value%1 !== 0  ) {
  //     this.setState({value: this.state.value})
  //   } else {
  //     this.setState({value})
  //   }
  //   console.log(`this.state.value = ${this.state.value}`)
  // }

  handleChange(event) {
    console.log(`handleChange triggered; value=${event.target.value}`)
    this.setState({value: event.target.value})
    console.log(`this.state.value = ${this.state.value}`)
  }

  handleSubmit(event) {
    console.log(`quantity: ${this.state.value}, id: ${this.props.id}`)
    this.props.updateQuantity(this.props.id, this.state.value)
    this.setState({cartObject: this.props.getCart()})
    this.setState({quantity: this.state.value})
    this.setState({value: 0})
    event.preventDefault()
  }

  deleteRow(id) {
    this.props.removeItem(id)
    this.setState({cartObject: this.props.getCart()})
  }

  render () {
    let cartOutput
    const style = {
      width: 100
    }
    if(this.state.cartObject.length === 0) {
      cartOutput = 
        <TableBody>
          <TableRow></TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <strong>Cart is empty</strong>
            </TableCell>
          </TableRow>
        </TableBody>
      
    } else {
      cartOutput = 
        <TableBody>
          {this.state.cartObject.map(item => {
              return (
                <TableRow key={item.id.toString()}>
                  <TableCell>
                    <Button onClick={event => this.deleteRow(item.id, event)} color="secondary" variant="contained">
                      Remove
                      <DeleteIcon />
                    </Button>
                  </TableCell><TableCell>
                    <img src={item.imgUrl} style={style} />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell>{`$${item.price.toFixed(2)}/${item.uom}`}</TableCell>
                  <TableCell>
                    <CartInput quantity={item.quantity} uom={item.uom} id={item.id} getCart={this.props.getCart.bind(this)} handleChange={this.handleChange.bind(this)} handleSubmit={this.handleSubmit.bind(this)} />
                  </TableCell>
                  {/* subtotal */}
                  <TableCell>${(item.quantity * item.price).toFixed(2)}</TableCell>
                </TableRow>
              )
            })}
        </TableBody>
    }

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Subtotal</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          {cartOutput}
          <TableFooter>
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <h5>${this.state.cartObject.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</h5>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <Button>
          <Link to="/catalogue">continue shopping</Link></Button>
        <Button><Link to="/checkout">finalise order</Link></Button>
      </Paper>
    )
  }
}

export default Cart;