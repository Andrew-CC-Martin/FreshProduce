import React from 'react';
import CartItem from './CartItem'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter'
import Paper from '@material-ui/core/Paper';
import Button from  '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.props.getCart()
  }

  deleteRow(id) {
    this.props.removeItem(id)
    this.setState({cartObject: this.props.getCart()})
  }

  render () {
    let cartOutput
    if(this.props.cartObject.length === 0) {
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
          {this.props.cartObject.map(item => {
            return (
              <CartItem 
              key={item.id.toString()}
              id={item.id}
              deleteRow={this.deleteRow.bind(this)}
              getCart={this.props.getCart.bind(this)}
              updateQuantity={this.props.updateQuantity.bind(this)}
              imgUrl={item.imgUrl}
              name={item.name}
              price={item.price}
              uom={item.uom}
              quantity={item.quantity}
              />
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
                <h5>${this.props.total}</h5>
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        <Button>
        {localStorage.cart.length > 2 ?
        <Link to="/catalogue">continue shopping</Link> : <Link to="/catalogue">Start shopping</Link>} </Button>
          
          {localStorage.cart.length > 2 ?
          <Button><Link to="/checkout">finalise order</Link> </Button> : ""}
          <br/><br/><br/>
      </Paper>
    )
  }
}

export default Cart;