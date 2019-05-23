import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

class SignUpContainer extends Component {
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
    const { signUp } = this.props;
    signUp({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <div>SignUpView</div>
      //   <SignUpView
      //     {...this.state}
      //     onChange={this.handleChange}
      //     onSubmit={this.handleSubmit}
      //   />
    );
  }
}
export default SignUpContainer;
