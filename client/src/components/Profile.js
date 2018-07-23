import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }
  componentDidMount() {
    console.log(localStorage)
    let userId = localStorage.id;
    console.log(userId);
    axios
      .get(`${ process.env.REACT_APP_API_URL }/users/` + userId)
      .then(res => {
        let name = res.data.user.name;
        let email = res.data.user.email;
        let company = res.data.user.company
        let address = res.data.user.address
        let deliveryInstructions = res.data.user.deliveryInstructions
        let phoneNumber = res.data.user.phoneNumber
        this.setState({ name: name, email: email, company: company, address: address, deliveryInstructions: deliveryInstructions, phoneNumber: phoneNumber });
        console.log(res.data.user.name);
        console.log(this.state);
      })
      .catch(error => {
        if (error.response.status === 401) {
          // this.props.history.push("/login");
        }
      });
  }

  render() {
    console.log('profile');
    console.log(localStorage);
    // console.log(token)
    // const { name, email } = props.details;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            {/* <h3 class="panel-title">
                  User Profile &nbsp;
                  {localStorage.getItem('jwtToken') &&
                    <button class="btn btn-primary" onClick={this.logout}>Logout</button>
                  }
                </h3> */}
          </div>
          <div className="panel-body">
            <table className="table table-stripe">
              <thead>
                <tr>
                  <th>name</th>
                  <th>Email</th>
                  <th>Company</th>
                  <th>Address</th>
                  <th>Delivery Instructions</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.name}</td>
                  <td>{this.state.email}</td>
                  <td>{this.state.company}</td>
                  <td>{this.state.address}</td>
                  <td>{this.state.deliveryInstructions}</td>
                  <td>{this.state.phoneNumber}</td>
                </tr>
              </tbody>
            </table>
            <Link to={`/update/${localStorage.id}`} className="btn btn-success">Edit Profile</Link>&nbsp;
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
