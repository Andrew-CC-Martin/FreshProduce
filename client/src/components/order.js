import React from "react";
import './Order.css';
import Login from './Login';

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
        setTimeout(cb,100)
    },
    signout(cb) {
        this.isAuthenticated = false
        setTimeout(cb, 100)
    }
}


class Order extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        companyName: '',
        address: '',
        phoneNumber: '',
        email: ''
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        this.props.onSubmit()
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <Login />
                <form>
                    <input
                        name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={e => this.change(e)}
                    />
                    <br/>
                    <input
                        name="lasttName"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={e => this.change(e)}
                    />
                    <br/>
                    <input
                        name="companyName"
                        placeholder="Company Name"
                        value={this.state.companyName}
                        onchange={e => this.change(e)}
                    />
                    <br/>
                    <input
                        name="address"
                        placeholder="Address"
                        value={this.state.address}
                        onchange={e => this.change(e)}
                    />
                    <br/>
                    <input
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={this.state.phoneNumber}
                        onchange={e => this.change(e)}
                    />
                    <br/>
                    <input
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onchange={e => this.change(e)}
                    />
                    <button onClick={e => this.onSubmit(e)}> Submit </button>
                </form>
            </div>
        )
    }
}

export default Order