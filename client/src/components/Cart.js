import React from 'react';
import CartList from './CartList'
import CartFooter from './CartFooter'

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    localStorage.cart = localStorage.cart || {}
    let cartOutput
    if(!localStorage.cart) {
      cartOutput = (
        <h2>Cart is empty</h2>
      )
    } else {
      cartOutput = (
        <div>
          {localStorage.cart.map(item => {
            <CartList key={item.id} />
          })}
        </div>
      )
    }

    return (
        <div>
          <h1>Cart</h1>
          <div className="cart-list">
            {cartOutput}
          </div>
          <CartFooter />
        </div>
    )
  }
}

export default Cart;