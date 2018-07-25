import React, { Component } from 'react';
import axios from 'axios';

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        axios.get(`${process.env.REACT_APP_API_URL}/users`)
            .then(res => {
                this.setState({ users: res.data.users });
                console.log(res.data.users);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.props.history.push("/login");
                }
            });
    }

    deleteUser(id) {
        console.log(id)
        axios.delete(`${process.env.REACT_APP_API_URL}/users/` + id)
            .then(res => {
                let name = res.data.user.name;
                let email = res.data.user.email;
                let company = res.data.user.company;
                let address = res.data.user.address;
                this.setState({ name: name, email: email, company: company, address: address });
                window.location.reload();
            })
            .catch(error => {
                if (error.response.status === 401) {
                }
            });

    }

    render() {
        // console.log('profile');
        console.log(localStorage);
        // console.log(token)
        return (
            <div class="panel-body">
                <table class="table table-stripe">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email</th>
                            <th>Company</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map(user =>
                            <tr key = {user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.company}</td>
                                <td>{user.address}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={this.deleteUser.bind(this, user._id)}>
                                        Delete Account
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    
}
export default UsersList