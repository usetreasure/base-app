import React from 'react';
import { Row, Col, Button, Input, Alert, Label } from 'reactstrap';
import axios from 'axios';

class ForgotPasswordPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      emailHelperText: "",
      showAlert: false
    };
  }
  
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      emailError: false
    });

    const url = '/password';
    const data = new FormData();
    data.append('user[email]', this.state.email);

    const self = this;
    axios.post(url, data).then(response => {
      self.setState({
        showAlert: true,
         email: '' 
      });
      window.setTimeout(function() {
        window.location = '/'; // redirect to root for now
      }, 4000);
    }).catch(error => {
      console.log(error);
      this.setState({
        emailError: true,
        emailHelperText: "Could not find your account"
      });
    });
  }

  render () {
    const { showAlert } = this.state;
    return (
      <div>
        {showAlert && 
          <Alert color="primary">
            Please check your email for instructions
          </Alert>
        }
        <div className="shadow-sm mt-5 p-4 border">
          <h1>
            New Password
          </h1>
          <p>
            Enter your email address below and we'll send you instructions on how to create a password.<br/>
          </p>
          <form onSubmit={this.handleSubmit}>
            <div>
              <Label>Email</Label>
              <Input
                id="email"
                name="user[email]"
                onChange={this.handleChange}
              />
              <Button color="primary" className='mt-2' type="submit">
                Email me reset password instructions
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default ForgotPasswordPage;