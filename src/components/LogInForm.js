import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogInForm = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <h2>Sign In</h2>
      <form>
        <label>Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <label>Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <button onClick={() => console.log(password, username)}>Submit</button>
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </form>
    </>
  );
};

export default LogInForm;
