import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container" style={{ margin: "6.4rem auto" }}>
      <h3 className="center-align">Login</h3>
      <div className="row">
        <form className="col s12" onSubmit={() => {}}>
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              className="validate"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              className="validate"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field col s12">
            <button
              className="btn-large waves-effect waves-light"
              type="submit"
            >
              Login
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
      <hr />
      <p>
        <strong>Don't have an account yet?</strong>
      </p>
      <button className="btn">Sign up</button>
    </div>
  );
};

export default Login;
