import React from "react";
import Login from './Login';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CheckoutTable from './CheckoutTable'

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


class Checkout extends React.Component {
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
                <div id="container">
                    <h4>Order Summary</h4>
                </div>
                <CheckoutTable />
                <form>
                <TextField
                    id="firstName"
                    label="First Name"
                    value={this.state.firstName}
                    onChange={e => this.change(e)}
                    margin="normal"
                    />
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

export default Checkout