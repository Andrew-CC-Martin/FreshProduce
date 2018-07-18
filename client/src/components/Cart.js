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

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert(`you added ${this.state.value} ${this.props.name} to the cart`)
    console.log(`product id is ${this.props.id}`)
    App.addToCart(this.props.id, this.state.value, this.props.name, this.props.price, this.props.imgUrl)
    event.preventDefault()
  }

  deleteRow(id) {
    App.removeItem(id)
    this.setState({cartObject: App.getCart()})
  }

  //increases quantity of item #id by 1
  addOne(id) {
    let cartObject = App.getCart()
    for(let i = 0; i < cartObject.length; i++) {
      if(cartObject[i].id === id) {
        cartObject[i].quantity += 1
      }
    }
    App.saveCart(cartObject)
    this.setState({cartObject: App.getCart()})
  }

  removeOne(id) {
    let cartObject = App.getCart()
    for(let i = 0; i < cartObject.length; i++) {
      if(cartObject[i].id === id) {
        if(cartObject[i].quantity != 1) {
          cartObject[i].quantity -= 1
        }
      }
    }
    App.saveCart(cartObject)
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
            return <CartItem key={item.id} cartObject={item} deleteRow={this.deleteRow.bind(this)} addOne={this.addOne.bind(this)} removeOne={this.removeOne.bind(this)} />
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