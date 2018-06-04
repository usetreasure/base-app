import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Button, Input, Row, Col } from 'reactstrap';
import axios from 'axios';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: '',
      emailError: false,
      passwordError: false,
      emailHelperText: "",
      passwordHelperText: "",
      showHelp: false
    };

    if(currentUser !== null) {
      window.location = '/';
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      emailError: false,
      emailHelperText: "",
      passwordError: false,
      passwordHelperText: "",
    });

    const url = '/login';
    const data = new FormData();
    data.append('user[email]', this.state.email);
    data.append('user[password]', this.state.password);
    data.append('user[remember_me]', "on"); // default to remember sessions

    axios.post(url, data).then(response => {
      window.location = '/'; // redirect to root for now
    }).catch(error => {
      this.setState({
        emailError: true,
        emailHelperText: "Can't seem to find your account with that email?",
        passwordError: true,
        passwordHelperText: "...or your password is incorrect",
        showHelp: true
      });
    });
  }

  render () {
    return (
      <Row>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <div className="bg-white p-5 mt-3">
            <form onSubmit={this.handleSubmit}>
              <div>
                <h1>Login</h1> 

                {this.state.emailError && <p className="text-danger">Can't seem to find your account with that email.</p>}
                <Input
                  id="email"
                  label="Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  invalid={this.state.emailError}
                  placeholder="email"
                />
                <br/>
                <Input
                  id="password"
                  label="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  invalid={this.state.passwordError}
                  placeholder="password"
                />
                <br/>
                <Button color="primary" disabled={!this.validateForm()} type="submit">
                  Login
                </Button>
                <br/>
                <br/>

                <p>
                  <Link to="/forgot_password">Reset password</Link>
                </p>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    );
  }
}

LoginPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string
};

export default LoginPage;
 