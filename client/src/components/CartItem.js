import React from 'react'
import { Table, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import App from '../App';

class CartItem extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
    // this.setState({cartObject: App.getCart()})
  }


  render () {
    //generates array of numbers 1-20
    let numberArray = [...Array(20).keys()].map(i => i + 1)
    let dropdownItems = numberArray.map(x => 
      (<DropdownItem key={x}>{x}</DropdownItem>)
    )
    
    return (
      <Table>
        <tbody>
          <tr>
            <td>
              <Button onClick={event => this.props.deleteRow(this.props.cartObject.id, event)} color="danger">X</Button>
            </td>
            <td>
              <img src={this.props.cartObject.imgUrl} width="100" />
            </td>
            <td>{this.props.cartObject.name}</td>
            <td>${this.props.cartObject.price}</td>
            <td>
              <Dropdown isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
              <DropdownToggle caret>
                {this.props.cartObject.quantity}
              </DropdownToggle>
              <DropdownMenu>
                {dropdownItems}
              </DropdownMenu>
              </Dropdown>
            {this.props.cartObject.quantity}
            </td>
            <td>${this.props.cartObject.quantity * this.props.cartObject.price}</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default CartItem