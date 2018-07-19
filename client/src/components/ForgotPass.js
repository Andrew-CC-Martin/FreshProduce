import React from 'react';
import './ForgotPass.css';
import { browserHistory } from 'react-router-dom';

class ForgotPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }
    this.goBack = this.goBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  goBack() {
      this.props.history.goBack();
  }

  handleChange = (e) => {
    const state = this.state
    state[e.target.email] = e.target.value;
    this.setState(state);
  //   console.log(this.state)
  }
  
  handleSubmit= (e) => {
      e.preventDefault();
      const { email } = this.state;
    //   axios.post(`${process.env.REACT_APP_API_URL}/forgot`, {
    //       email,
    //   }).then((response) => {
    //       if (response.data.msg === 'success'){
    //           alert("Message Sent."); 
    //           this.resetForm()
    //       }else if(response.data.msg === 'fail'){
    //           alert("Message failed to send.")
    //       }
    //   })
    //   this.props.history.push('/login')
  }

  render(){
    return (
      <div className='forgot-pass-page'>
        <div className='back'>
          <button bsSize="small" onClick={this.goBack} class="back" > back </button>
        </div>
        <form onSubmit={this.handleSubmit} className='form'>
          <label htmlFor="email">Please enter your email to receive password reset instructions:</label>
          <input type='email' id="email" placeholder="Email" onChange={this.handleChange} required></input>
          <button type='submit' className='btn submit-btn'>Submit</button>
        </form>
      </div>
    )
  }
}

export default ForgotPass;