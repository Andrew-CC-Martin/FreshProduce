import React from 'react';
import axios from 'axios';

// hereeee

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };
  }
  componentDidMount() {
    let userId = localStorage.jwtToken;
    axios
      .get('/users/' + userId)
      .then(res => {
        let name = res.data.user.name;
        let email = res.data.user.email;
        this.setState({ name: name, email: email });
        console.log(res.data.user.name);
        console.log(this.state);
      })
      .catch(error => {
        if (error.response.status === 401) {
          // this.props.history.push("/login");
          console.log(error);
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
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.name}</td>
                  <td>{this.state.email}</td>
                  <td>company</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
