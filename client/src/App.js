import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme }from '@material-ui/core/styles/';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Lost from './components/Lost';
import Catalogue from './components/Catalogue';
import UpdateUser from './components/UpdateUser';
import UsersList from './components/UsersList';
import UserInvoice from './components/UserInvoice';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart'
import { get } from 'https';
import Order from './components/Order';
import Footer from './components/Footer'
import Navbar from './components/Navbar'

const theme = createMuiTheme();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      message: '',
      token: '',
      cartObject: App.getCart()
    };
  }

  //Static methods for CRUD operations on cart, to and from local storage
  //Can be called from any file by importing App.js, and then calling eg App.getCart()
  static getCart = () => {
    return (JSON.parse(localStorage.getItem('cart')) || [])
  }

  static emptyCart = () => {
    localStorage.removeItem('cart')
  }

  static removeItem = id => {
    let cartObject = App.getCart()
    for(let i = 0; i < cartObject.length; i++) {
      if(cartObject[i].id === id) {
        cartObject.splice(i, 1)
      }
    }
    App.saveCart(cartObject)
  }

  static saveCart = cartObject => {
    localStorage.setItem('cart', JSON.stringify(cartObject))
  }

  static addToCart = (id, quantity, name, price, imgUrl) => {
    if(typeof quantity != "number") {
      quantity = Number(quantity)
    }
    let cartObject = App.getCart()
    let alreadyInCart = cartObject.some(item => {
      return item.id === id
    })
    if(alreadyInCart) {
      for(let i = 0; i < cartObject.length; i++) {
        if(cartObject[i].id === id) {
          cartObject[i].quantity += quantity
        }
      }
    } else {
      cartObject.push({id: id, quantity: quantity, name: name, price: price, imgUrl: imgUrl})
    }
    App.saveCart(cartObject)
  }

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
          window.location.reload();
        })
        .catch(e => {
          let msg = e.response.data;
          if (e.response.status === 400) {
            this.setState({ message: msg });
          }
        })
  };

  handleRegister = user => {
    console.log(user);
    console.log(this.props)
    console.log(user.password);
    if (user.password !== user.confirmPassword) {
      this.setState({ message: 'Password does not match!' });
      console.log(this.state.message);
    } else {
      const { name, email, password, confirmPassword } = user;
      console.log(user);

      axios
        .post(`${process.env.REACT_APP_API_URL}/register`, {
          name,
          email,
          password
        })
        .then(result => {
          console.log(result.data)
          localStorage.setItem('jwtToken', result.data.token);
          localStorage.setItem('name', result.data.name);
          localStorage.setItem('id', result.data._id);
          const { name, email, token } = result.data;
          this.setState({ name, email, token, message: '' });
          console.log(this.state)
          window.location.reload();
        })
        .catch(e => {
          let msg = e.response.data;
          if (e.response.status === 400) {
            this.setState({ message: msg });
          }
        });
    }
  };

  render() {
    // // console.log(this.state);
    // console.log(localStorage);
    console.log(this.state);
    console.log(localStorage);

    return (
      
      <Router>
        <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Header />
            <Navbar />
          </header>
          {localStorage.getItem('jwtToken') && (
            <button className="btn btn-primary" onClick={this.logout}>
              Logout
            </button>
          )}
          {this.state.message !== '' && (
            <div className="alert alert-warning alert-dismissible" role="alert">
              {this.state.message}
            </div>
          )}
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catalogue" component={Catalogue} />
            <Route exact path="/update/:id" component={UpdateUser} />
            <Route exact path="/user/inv" component={UserInvoice} />
            <Route exact path="/contactus/" component={ContactUs} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/order" component={Order} />
            <Route
              exact
              path="/register"
              render={() =>
                !!this.state.name ? (
                  <Redirect to="/profile" />
                ) : (
                  <Register
                    details={this.state}
                    onCreate={this.handleRegister}
                  />
                )
              }
            />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/profile"
              render={() => (!!localStorage.jwtToken ? <Profile /> : <Login />)}
            />
            <Route
              exact
              path="/users"
              render={() =>
                localStorage.id === process.env.REACT_APP_HOST_ADMIN ? <UsersList /> : <Lost />
              }
            />
            <Route component={Lost} />
          </Switch>
          <Footer />
        </div>
        </MuiThemeProvider>
      </Router>
     
    );
  }

}

export default App;
