import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { login } from "../actions";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/protected"));
  };

  render() {
    // console.log();
    return (
      <div>
        {this.props.loginError && <p>Error on login, try again</p>}
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
          <input
            placeholder="Username"
            type="text"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            placeholder="Password"
            type="text"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
            {this.props.isLoggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
    loginError: state.loginError
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
