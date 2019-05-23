// Core
import React, { Component } from 'react';

// Instruments
import '../Main_Page/main_page.css';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      fullName: '',
      username: '',
      password: '',
      SignedIn: false,
    };
  }

  render() {
    return (
      <div className="App">
        <div
          className="main-background-image"
          style={{
            backgroundImage: `url(../images/brainstorming-colleagues-communication-1204649.png)`,
          }}
        />
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="email">
              <input
                type="text"
                className="email-field"
                placeholder="Enter your email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="password">
              <input
                type="text"
                className="password-field"
                placeholder="Enter your password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="createAccount">
              <button className="sign-in" type="submit">
                SignIn
              </button>
              <small>
                Or you can create an account and{''}
                <button className="sign-up" type="submit">
                  SignUp
                </button>
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
