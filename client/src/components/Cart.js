import React from 'react';
import CartItem from './CartItem'
import CartFooter from './CartFooter'
import App from '../App'
import { Table } from 'reactstrap'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartObject: App.getCart()
    }
  }

  render () {
    console.log(this.state.cartObject[0].id)
    let cartOutput
    if(!this.state.cartObject) {
      cartOutput = (
        <h2>Cart is empty</h2>
      )
    } else {
      cartOutput = 
        <div>
          {this.state.cartObject.map(item => {
            return <CartItem key={item.id} cartObject={item} />
          })}
        </div>
    }

    return (
        <div>
          <h1>Cart</h1>
          <Table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Product Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Total</th>
              </tr>
            </thead>
          </Table>
          {cartOutput}
          <CartFooter />
        </div>
    )
  }
}

export default Cart;