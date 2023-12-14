import { useState } from "react";

export default function Register() {
  /*   const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [avatar, setAvatar] = useState(""); */

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    avatar: "",
  });

  const register = async () => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formState }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.error("Erreur, impossible de créer le compte");
    }
  };

  return (
    <div className="form-container">
      <h1> Créer un nouveau compte </h1>
      <form className="flex flex-col">
        <label htmlFor="username"> Pseudo </label>
        <input
          type="text"
          id="username"
          value={formState.username}
          onChange={(e) =>
            setFormState({ ...formState, username: e.target.value })
          }
        />
        <label htmlFor="email"> Email </label>
        <input
          type="email"
          id="email"
          value={formState.email}
          onChange={(e) =>
            setFormState({ ...formState, email: e.target.value })
          }
        />
        <label htmlFor="password"> Mot de passe </label>
        <input
          type="password"
          id="password"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
        <label htmlFor="passwordConfirmation"> Confirmer le mot de passe </label>
        <input
          type="password"
          id="passwordConfirmation"
          value={formState.passwordConfirmation}
          onChange={(e) =>
            setFormState({
              ...formState,
              passwordConfirmation: e.target.value,
            })
          }
        />
        <label htmlFor="avatar"> Avatar </label>
        <input
          type="text"
          id="avatar"
          value={formState.avatar}
          onChange={(e) =>
            setFormState({ ...formState, avatar: e.target.value })
          }
        />
        <button type="button" onClick={register}>
          S'inscrire
        </button>
      </form>
    </div>
  );
}
