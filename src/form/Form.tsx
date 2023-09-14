import React, { useState } from "react";
import "./form.css";

export default function Form() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function onChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
    setMessage("");
  }
  function onChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    setMessage("");
  }

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.length === 0 || password.length === 0) {
      setMessage("Please fullfill username & password!");
      return;
    }
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then(async (res) => {
      const data = await res.json();
      setMessage(data.message);
    });
  };

  return (
    <div className="form">
      <form
        action="#"
        method="POST"
        className="form__submit"
        onSubmit={onSubmit}
      >
        <h2 className="form__heading">Login Form</h2>
        <p className="form__error">{message}</p>
        <div className="form__container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="form__textbox"
            placeholder="Enter your name"
            autoComplete="off"
            onChange={onChangeUsername}
            value={username}
          />
        </div>
        <div className="form__container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form__textbox"
            placeholder="Enter your password"
            autoComplete="off"
            value={password}
            onChange={onChangePassword}
          />
        </div>
        <p
          style={{
            textAlign: "center",
            margin: "0 0 30px 0",
          }}
        >
          <button className="form__btn">Login</button>
        </p>
        <p className="form__member">
          Not a member?{" "}
          <button type="button" className="form__btn--signup">
            Sign up now
          </button>
        </p>
      </form>
    </div>
  );
}
