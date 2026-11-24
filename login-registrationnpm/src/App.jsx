
import { useState } from "react";

function App() {

  // Registration states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Store registered details
  const [registered, setRegistered] = useState(null);

  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [message, setMessage] = useState("");

  // Registration function
  function handleRegister(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    setRegistered({
      name: name,
      email: email,
      password: password
    });

    alert("Registration Successful!");
  }

  // Login function
  function handleLogin(e) {
    e.preventDefault();

    if (
      registered &&
      loginEmail === registered.email &&
      loginPassword === registered.password
    ) {
      setMessage("Login Successful");
    } else {
      setMessage("Invalid Email or Password");
    }
  }

  return (
    <div>
      <h1>Login and Registration Form</h1>

      {/* Registration Form */}
      <h2>Registration Form</h2>

      <form onSubmit={handleRegister}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Register</button>

      </form>

      {/* Display Registered Details */}
      {registered && (
        <div>
          <h2>Registered Details</h2>
          <p>Name: {registered.name}</p>
          <p>Email: {registered.email}</p>
        </div>
      )}

      <hr />

      {/* Login Form */}
      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={loginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>

      </form>

      <h3>{message}</h3>

    </div>
  );
}

export default App;












