// LoginPage.js

import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginAction } from "../../store/actionCreators/AuthActions";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const clickHandler = (credentials) => {
    dispatch(loginAction(credentials));
  };

  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <h2>Login Page</h2>
      <form onSubmit={(e) => { e.preventDefault(); clickHandler({ email, password }); }}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default LoginPage;
