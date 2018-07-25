import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme }from '@material-ui/core/styles/';
import CssBaseline from '@material-ui/core/CssBaseline';
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
// import ProductCategory from './ProductCategory';
import ContactUs from './components/ContactUs';
import Cart from './components/Cart'
import ForgotPass from './components/ForgotPass'
import ResetPass from './components/ResetPass'
import { get } from 'https';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Navbar from './components/Navbar';



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
      cartObject: this.getCart()
    };
  }

  getCart = () => {
    return (JSON.parse(localStorage.getItem('cart')) || [])
  }

  removeItem = id => {
    let cartObject = this.getCart()
    for(let i = 0; i < cartObject.length; i++) {
      if(cartObject[i].id === id) {
        cartObject.splice(i, 1)
      }
    }
    this.saveCart(cartObject)
    this.setState({cartObject: cartObject})
  }

  updateQuantity = (id, newQuantity) => {
    let cartObject = this.getCart()
    for(let i = 0; i < cartObject.length; i++) {
      if(cartObject[i].id === id) {
        cartObject[i].quantity = newQuantity
      }
    }
    this.saveCart(cartObject)
    this.setState({cartObject: cartObject})
  }

  saveCart = (cartObject) => {
    localStorage.setItem('cart', JSON.stringify(cartObject))
  }

  addToCart = (id, quantity, name, price, imgUrl, uom) => {
    if(typeof quantity != "number") {
      quantity = Number(quantity)
    }
    let cartObject = this.getCart()
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
      cartObject.push({id: id, quantity: quantity, name: name, price: price, imgUrl: imgUrl, uom: uom})
    }
    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(cartObject))
    this.setState({cartObject: this.getCart()})
  }

  logout = () => {
    this.setState({token: ''})
    // console.log(this.state)
    // console.log(localStorage, 'with');
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('name');
    // localStorage.removeItem('id');
    console.log(localStorage, 'deleted');
    axios
    .delete(`${process.env.REACT_APP_API_URL}/users/token/`+ localStorage.id)
    .then(result => {
      // console.log(result.data)
      console.log(this.state)
      localStorage.removeItem('id');
      console.log(localStorage);
    })
    .catch(e => {
      let msg = e.response.data;
      if (e.response.status === 400) {
        this.setState({ message: msg });
      }
    })
    // window.location.assign('/');
  };

  handleRegister = user => {
    console.log(user);
    console.log(this.props)
    console.log(user.password);
    if (user.password !== user.confirmPassword) {
      this.setState({ message: 'Password does not match!' });
      console.log(this.state.message);
    } else {
      const { name, email, password, confirmPassword, company, address, deliveryInstructions, phoneNumber } = user;
      console.log(user);

      axios
        .post(`${process.env.REACT_APP_API_URL}/register`, {
          name,
          email,
          password,
          company,
          address,
          deliveryInstructions,
          phoneNumber
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
    return (

      <Router>
        <div className="App">
        {/* create this div so that footer is separate - necessary for sticky footer */}
        <div className="App-main-content">
          <CssBaseline />
          <header>
            {/* <Header /> */}
           <Navbar cartIconNumber={this.state.cartObject.length}/>
          </header>
          {/* {localStorage.getItem('jwtToken') && (
            <button className="btn btn-primary" onClick={this.logout}>
              Logout
            </button>
          )} */}
          {this.state.message !== '' && (
            <div className="alert alert-warning alert-dismissible" role="alert">
              {this.state.message}
            </div>
          )}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catalogue" render={() => <Catalogue getCart={this.getCart.bind(this)} addToCart={this.addToCart} />} />
            <Route exact path="/update/:id" component={UpdateUser} />
            <Route exact path="/user/inv" component={UserInvoice} />
            <Route exact path="/contactus/" component={ContactUs} />
            <Route exact path="/cart" render={() => <Cart
              getCart={this.getCart}
              removeItem={this.removeItem}
              saveCart={this.saveCart}
              addToCart={this.addToCart}
              getCart={this.getCart}
              updateQuantity={this.updateQuantity}
              cartObject={this.state.cartObject}
              total={this.state.cartObject.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
              />} 
            />
            <Route exact path="/forgotpass" component={ForgotPass} />
            <Route exact path="/reset/:token" component={ResetPass} />

            {/* <Route exact path="/checkout" render={() => {
              return <Checkout someProps={this.state} />;
            }} /> */}
             <Route
              exact
              path="/checkout"
              render={() => (!!localStorage.id ? <Checkout someProps={this.state} getCart={this.getCart} /> : <Login />)}
            />
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
            {/* <Route exact path="/login" component={Login} /> */}
            <Route
              exact
              path="/login"
              render={() => (!!localStorage.cart && !!localStorage.id ? <Checkout someProps={this.state} getCart={this.getCart} /> : <Login />)}
            />
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
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </Router>

    );
  }

}

export default App;
