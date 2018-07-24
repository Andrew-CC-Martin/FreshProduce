import React from 'react';
import CartFooter from './CartFooter'
// import App from '../App'
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

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartObject: this.props.getCart()
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(`you added ${this.state.value} ${this.props.name} to the cart`)
    console.log(`product id is ${this.props.id}`)
    this.props.addToCart(this.props.id, this.state.value, this.props.name, this.props.price, this.props.imgUrl )
    event.preventDefault()
  }

  deleteRow(id) {
    this.props.removeItem(id)
    this.setState({cartObject: this.props.getCart()})
  }

  //increases quantity of item #id by 1
  addOne(id) {
    let cartObject = this.props.getCart()
    for(let i = 0; i < cartObject.length; i++) {
      if(cartObject[i].id === id) {
        cartObject[i].quantity += 1
      }
    }
    this.props.saveCart(cartObject)
    this.setState({cartObject: cartObject})
  }

  removeOne(id) {
    let cartObject = this.props.getCart()
    for(let i = 0; i < cartObject.length; i++) {
      if(cartObject[i].id === id) {
        if(cartObject[i].quantity != 1) {
          cartObject[i].quantity -= 1
        }
      }
    }
    this.props.saveCart(cartObject)
    this.setState({cartObject: cartObject})
  }


  render () {
    let cartOutput
    const style = {
      width: 100
    }
    if(this.state.cartObject.length === 0) {
      cartOutput = 
        <h2>Cart is empty</h2>
      
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
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button onClick={event => this.removeOne(item.id, event)}>-</Button>
                    &nbsp;&nbsp;&nbsp;{item.quantity}&nbsp;&nbsp;&nbsp;
                    <Button onClick={event => this.addOne(item.id, event)}>+</Button>
                  </TableCell>
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
              <TableCell variant="header" >${this.state.cartObject.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</TableCell>
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