import "./App.css";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleConfirmChange = (event) => {
    const value = event.target.value;
    setConfirm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    console.log(email, password);
  };

  return (
    <div className="container">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          placeholder="Jean Dupont"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <span>Email</span>
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <span>Password</span>
        <input
          placeholder="lErEaCtEuR2020"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <span>Confirm your password</span>

        <input
          placeholder="lErEaCtEuR2020"
          type="password"
          name="password"
          value={confirm}
          onChange={handleConfirmChange}
        />
        <input type="submit" value="REGISTER" />
      </form>
    </div>
  );
};

export default App;
