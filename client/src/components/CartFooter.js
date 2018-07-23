import React from 'react' 
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class CartFooter extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <Button><Link to="/catalogue">continue shopping</Link></Button>
        <Button><Link to="/checkout">finalise order</Link></Button>
        <br/>total: ${this.props.total}
      </div>
    )
  }
}

export default CartFooter