import React, { Component } from 'react';
import SignInView from './SignInView';

const INITIAL_STATE = {
  email: '',
  password: '',
};

class SignInContainer extends Component {
  state = { ...INITIAL_STATE };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { signIn } = this.props;
    signIn({ ...this.state });
    this.reset();
    console.log('You are signed in!');
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <SignInView
        {...this.state}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
export default SignInContainer;
