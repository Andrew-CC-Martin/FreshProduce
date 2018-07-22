import React from 'react';
import './ForgotPass.css';
import axios from 'axios';
import { browserHistory } from 'react-router-dom';

class ResetPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //When user clicks the link on email this component should be rendered
  componentDidMount() {
    //   console.log(req.params.id)
    //   let path = document.location.pathname
    // axios
    //   .get(`${ process.env.REACT_APP_API_URL } + ${path}` )
    //   .then(res => {
    //     let password = res.data.user.password;
    //     // let email = res.data.user.email;
    //     // this.setState({ name: name, email: email });
    //     // console.log(res.data.user.name);
    //     console.log(res);
    //   })
    //   .catch(error => {
    //     if (error.res.status === 401) {
    //       // this.props.history.push("/login");
    //     }
    //   });
  }

  handleChange = (e) => {
    const state = this.state
    this.setState({password: e.target.value, confirmPassword: e.target.value});
  }
  
  handleSubmit= (e) => {
      e.preventDefault();
      const { password, confirmPassword } = this.state;
      console.log(this.state)
      axios.post(`${process.env.REACT_APP_API_URL}/forgot`, {
          password, confirmPassword
      }).then((response) => {
          if (response.data.msg === 'success'){
              alert("Message Sent."); 
              this.resetForm()
          }else if(response.data.msg === 'fail'){
              alert("Message failed to send.")
          }
      })
      this.props.history.push('/')
  }

  render(){
    return (
      <div className='reset-pass-page'>
        <div className='back'>
        </div>
        <form onSubmit={this.handleSubmit} className='form'>
          <label htmlFor="password">Password</label>
          <input type='password' id="password" placeholder="New Password" onChange={this.handleChange} required></input>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type='password' id="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange} required></input>
          <button type='submit' className='btn submit-btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default ResetPass;