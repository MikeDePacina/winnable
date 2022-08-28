import React, { useState } from "react";

const SignUpPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <h2>Sign Up</h2>
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

        <button onClick={() => console.log(password, username)}>Sign Up</button>
      </form>
    </>
  );
};

export default SignUpPage;
