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

  // toggle() {
  //   this.setState(prevState => ({
  //     dropdownOpen: !prevState.dropdownOpen
  //   }));
  //   // this.setState({cartObject: App.getCart()})
  // }

  deleteRow(id, event) {
    App.removeItem(id)
    this.setState({cartObject: App.getCart()})
  }

  render () {
    let cartOutput
    if(this.state.cartObject.length === 0) {
      cartOutput = 
        <h2>Cart is empty</h2>
      
    } else {
      cartOutput = 
        <div>
          {this.state.cartObject.map(item => {
            return <CartItem key={item.id} cartObject={item} deleteRow={this.deleteRow.bind(this)} />
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
          <CartFooter total={this.state.cartObject.reduce((total, item) => total + (item.price * item.quantity), 0)} />
        </div>
    )
  }
}

export default Cart;