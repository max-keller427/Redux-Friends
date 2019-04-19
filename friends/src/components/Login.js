import React from "react";

class Login extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <input placeholder="Username" />
          <input placeholder="Password" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
