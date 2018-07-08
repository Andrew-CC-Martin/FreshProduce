import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// Last
// console.log(localStorage)
// this.logout = this.logout.bind(this)
class Header extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  

  render () {
    return (
      <div>
        <div>

</div>
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
      <DropdownToggle caret>
        Menu
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header><Link to='/login'>Login</Link></DropdownItem>
        <DropdownItem ><Link to='/register'>Register</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem ><Link to='/'>Home</Link></DropdownItem>
      </DropdownMenu>
    </Dropdown>
</div>
    


      
    )}
}

export default Header