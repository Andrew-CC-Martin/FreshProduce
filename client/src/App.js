import React, { Component } from 'react';
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
import ContactUs from './components/ContactUs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      message: '',
      token: ''
    };
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
    console.log(this.state);
    console.log(localStorage);
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
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
          <h1>Fresh Produce</h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/catalogue" component={Catalogue} />
            <Route exact path="/update/:id" component={UpdateUser} />
            <Route exact path="/contactus/" component={ContactUs} />
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
        </div>
      </Router>
    );
  }
}

export default App;
