import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const isLoggedIn = localStorage.jwtToken !== undefined ? true : false;
// Last
console.log(isLoggedIn)
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
        <DropdownItem ><Link to='/'>Home</Link></DropdownItem>
        {!isLoggedIn ?
              <DropdownItem header><Link to='/login'>Login</Link></DropdownItem> : ''}
        {!isLoggedIn ?
        <DropdownItem ><Link to='/register'>Register</Link></DropdownItem> : ''}
        <DropdownItem divider />
        {isLoggedIn ?
            <DropdownItem ><Link to='/profile'>Profile</Link></DropdownItem> : ''}
      </DropdownMenu>
    </Dropdown>
</div>
    


      
    )}
}

export default Header