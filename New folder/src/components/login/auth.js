import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginAction } from "../../store/actionCreators/AuthActions";
// import { useNavigate } from "react-router-dom";

const LoginPage =() =>{
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const clickHandler = (credentials) => {
    dispatch(loginAction(credentials));
  };
  
  return (
    <div style={{ backgroundColor: "#f3f3f3" }}>
      <h2>Login Page</h2>
      <form onSubmit={(e) => { e.preventDefault(); clickHandler({ username, password }); }}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
