import React from 'react';
import { Link } from 'react-router-dom'

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

const isLoggedIn = localStorage.jwtToken !== undefined ? true : false;


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

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
    // console.log(localStorage, 'with');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('name');
    // localStorage.removeItem('id');
    // console.log(localStorage, 'deleted');
    window.location.assign('/');
    axios
        .delete(`${process.env.REACT_APP_API_URL}/users/token/`+ localStorage.id)
        .then(result => {
          // console.log(result.data)
          // console.log(this.state)
          localStorage.removeItem('id');
          window.location.assign('/');
        })
        .catch(e => {
          let msg = e.response.data;
          if (e.response.status === 400) {
            this.setState({ message: msg });
          }
        })
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
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
              {!isLoggedIn ?
              <MenuItem onClick={this.handleClose}><Link to='/login' className="link">Login</Link></MenuItem>: '' }
              {!isLoggedIn?
              <MenuItem onClick={this.handleClose}><Link to='/register' className="link">Register</Link></MenuItem>: ''}
              {isLoggedIn?
              <MenuItem onClick={this.handleClose}><Link to='/profile' className="link">Profile</Link></MenuItem>:''}
              {isLoggedIn?
              <MenuItem onClick={this.handleClose}> {localStorage.getItem('jwtToken') && (
                <button onClick={this.logout}>
                  Logout
                </button>
              )}
              </MenuItem>:''}

            </Menu>
            <Typography variant="title" color="inherit" >
              Food Forum
            </Typography>
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
  classes: PropTypes.object.isRequired,
};

export default MenuAppBar