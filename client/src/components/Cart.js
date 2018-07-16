import React from 'react';
import CartItem from './CartItem'
import CartFooter from './CartFooter'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cartObject: []
    }
  }

  componentDidMount() {
    this.setState({
      cartObject: JSON.parse(localStorage.getItem('cart'))
    })
  }

  render () {
    console.log(this.state.cartObject)
    let cartOutput
    if(!this.state.cartObject) {
      cartOutput = (
        <h2>Cart is empty</h2>
      )
    } else {
      cartOutput = (
        <div>
          {this.state.cartObject.map(item => {
            <CartItem key={item.id}/>
          })}
        </div>
      )
    }

    return (
        <div>
          <h1>Cart</h1>
          <div className="cartObject-list">
            {cartOutput}
          </div>
          <CartFooter />
        </div>
    )
  }
}

export default Cart;