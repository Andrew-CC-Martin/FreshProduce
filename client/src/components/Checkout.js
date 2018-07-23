import React from "react";
import Login from './Login';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CheckoutTable from './CheckoutTable'
import axios from 'axios'

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
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        // console.log(this.props.match.params.id)
        // console.log(this.props)
        console.log(localStorage.id)
        axios.get(`${ process.env.REACT_APP_API_URL }/users/`+localStorage.id )
            .then(res => {
            this.setState({ user: res.data.user });
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        this.props.onSubmit()
        console.log(this.state)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <div id="container">
                    <h4>Order Summary</h4>
                </div>
                <CheckoutTable />
                <form>
                {/* <TextField
                    id="firstName"
                    label="First Name"
                    value={this.state.user.firstName}
                    onChange={e => this.onChnge(e)}
                    margin="normal"
                    /> */}
                    <input
                        name="name"
                        placeholder="Name"
                        value={this.state.user.name}
                        onChange={e => this.onChnge(e)}
                    />
                    <br/>
                    {/* <input
                        name="lastName"
                        // placeholder="Last Name"
                        value={this.state.user.lastName}
                        onChange={e => this.onChnge(e)}
                    />
                    <br/> */}
                    <input
                        name="companyName"
                        placeholder="Company Name"
                        value={this.state.user.company}
                        // onChange={e => this.onChnge(e)}
                    />
                    <br/>
                    <input
                        name="address"
                        placeholder="Address"
                        value={this.state.user.address}
                        onChange={e => this.onChnge(e)}
                    />
                    <br/>
                    <input
                        name="phoneNumber"
                        placeholder="Phone Number"
                        value={this.state.user.phoneNumber}
                        onChange={e => this.onChnge(e)}
                    />
                    <br/>
                    <input
                        name="email"
                        placeholder="Email"
                        value={this.state.user.email}
                        onChange={e => this.onChnge(e)}
                    />
                    <button onClick={e => this.onSubmit(e)}> Submit </button>
                </form>
            </div>
        )
    }
}

export default Checkout