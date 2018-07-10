import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Lost from './components/Lost';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      message: ''
    };
  }

  logout = () => {
    console.log(localStorage, 'with');
    localStorage.removeItem('jwtToken');
    console.log(localStorage, 'deleted');
    // window.location.reload();
  };

  handleRegister = user => {
    console.log(user);

    const { name, email, password, confirmPassword } = user;
    // const { history } = this.props;
    console.log(user);

    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, { name, email, password })
      .then(result => {
        console.dir(result.headers)
        const { name, email } = result.data;
        this.setState({ name, email });
        // this.props.history.push('/login')
      })
      .catch(e => {
        let msg = e.response.data;
        if (e.response.status === 400) {
          this.setState({ message: msg });
        }
      });
  };

  render() {
    console.log(this.state);
    console.log({ localStorage });

    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Header />
            {/* <Link to='/Menu'>Menu</Link> */}
          </header>
          {localStorage.getItem('jwtToken') && (
            <button className="btn btn-primary" onClick={this.logout}>
              Logout
            </button>
          )}
          <h1>Fresh Produce</h1>
          <Switch>
            {/* <Route exact path='/menu' component={Header} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path='/register' render={() => 
              !!this.state.name ? (
                <Redirect to='/profile' />
              ) : (
                <Register
                  details={this.state} onCreate={this.handleRegister}
                />
              )              
            } />
            <Route exact path="/login" component={Login} />
            {/* <Route
              exact
              path="/register"
              render={() =>
                !!this.state.name ? (
                  <Profile details={this.state} />
                ) : (
                  <Register
                    details={this.state}
                    onCreate={this.handleRegister}
                  />
                )
              }
            // /> */}
            <Route
              exact
              path="/profile"
              render={props => <Profile details={this.state} />}
            />
            <Route component={Lost} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
