import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge'
import App from '../App';
import ReactDOM from 'react-dom'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Button from '@material-ui/core/Button'
import logo from '../images/title_red.png'

const isLoggedIn = localStorage.getItem('jwtToken') ? true : false;


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -20,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   shoppingCartBadge: ''
    // }
  }

  componentDidMount() {
    // this.shoppingCartBadge.addEventListener('storage')
    // window.addEventListener('storage', this.handleCartChange)
    ReactDOM.findDOMNode(this).addEventListener('storage', this.handleCartChange)
  }

  state = {
    auth: true,
    anchorEl: null,
  };

  handleCartChange = event => {
    this.setState({cartIconNumber: this.props.getCart().length})
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logout = () => {
    this.setState({token: ''})
    // console.log(this.state)
    console.log(localStorage, 'with');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('name');
    // localStorage.removeItem('id');
    console.log(localStorage, 'deleted');
    axios
    .delete(`${process.env.REACT_APP_API_URL}/users/token/`+ localStorage.id)
    .then(result => {
      // console.log(result.data)
      // console.log(this.state)
      localStorage.removeItem('id');
    })
    .catch(e => {
      let msg = e.response.data;
      if (e.response.status === 400) {
        this.setState({ message: msg });
      }
    })
    // window.location.assign('/');
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const img = <img style={{marginTop:10}} src= "../images/food_forum_black" />

    return (
      <div>
        <AppBar position="static" color="default" title={img}>
          <Toolbar title={img} style = {{"justifyContent":"space-between"}}>
            <IconButton
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
            <MenuIcon/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}><Link to='/' className="link">Home</Link></MenuItem>
              <MenuItem onClick={this.handleClose}><Link to='/catalogue' className="link">Catalogue</Link></MenuItem>
              <MenuItem onClick={this.handleClose}><Link to='/contactus' className="link">Contact us</Link></MenuItem>
              {!isLoggedIn ?
              <MenuItem onClick={this.handleClose}><Link to='/login' className="link">Login</Link></MenuItem>: '' }
              {!isLoggedIn?
              <MenuItem onClick={this.handleClose}><Link to='/register' className="link">Register</Link></MenuItem>: ''}
              {isLoggedIn?
              <MenuItem onClick={this.handleClose}><Link to='/profile' className="link">Profile</Link></MenuItem>:''}
              {localStorage.id === process.env.REACT_APP_HOST_ADMIN ?
              <MenuItem onClick={this.handleClose}><Link to='/users' className="link">Users List</Link></MenuItem>:''}
              {localStorage.getItem('jwtToken')?
              <MenuItem onClick={this.handleClose} onClick={this.logout}>
                  Logout
              </MenuItem>:''}

            </Menu>
            {/* <Typography variant="title" color="inherit" >
              Food Forum
            </Typography> */}
            <Link to='/' className="link">
              <img src={logo} style={{"width": 150}} />
            </Link>
            <Link to="/cart">
              <IconButton color="inherit" aria-label="Cart" style = {{"justifyContent":"right"}}>
                {/* <Badge ref={elem => this.shoppingCartBadge = elem} badgeContent={this.props.cartIconNumber}> */}
                <Badge badgeContent={this.props.cartIconNumber}>
                    <ShoppingCartIcon color="inherit"/>
                </Badge>
              </IconButton>
            </Link>
             {/* {auth && ( */}

            {/* <div>
                <IconButton
                  aria-owns={open ? 'menu-account' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-account"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >

                </Menu>
              </div> */}


            {/* {auth && ( */}
              {/* <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}><Link to='/login'>Login</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}><Link to='/register'>Register</Link></MenuItem>
                  <MenuItem onClick={this.handleClose}><Link to='/profile'>Profile</Link></MenuItem>
                </Menu>
              </div> */}
            {/* )} */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  //classes: PropTypes.object.isRequired,
};

export default MenuAppBar
