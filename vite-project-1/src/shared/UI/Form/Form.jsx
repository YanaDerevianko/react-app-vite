import React, { useState } from "react";
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';
import {Warning} from '../Warning/Warning';
import css from "./form.module.css";

export const FormComponent = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState();
  const [showWarning, setShowWarning] = useState(false);

  const handlePasswordBlur = () => {
    setIsPasswordValid(password.trim().length >= 8);
    if (password.length < 8) {
      alert("The password is too short");
    }
  };
  const userNameHandler = (e) => {
    setUserName(e.target.value)
  }
  const passwordHandler = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName.trim().length && password.trim().length && isPasswordValid) {
      alert(
        `Your Name is: ${userName.trim()},\nYour Password is: ${password.trim()}`
      );
      setUserName("");
      setPassword("");
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className={css.label}>
          Name:
          <Input
            type="text"
            value={userName}
            onChange={userNameHandler}
            placeholder="Name"
          />
        </label>
        <label className={css.label}>
          Password:
          <Input
            type="password"
            value={password}
            onChange={passwordHandler}
            onBlur={handlePasswordBlur}
            placeholder="Password"
          />
        </label>
        {showWarning && <Warning>Please fill in all fields!</Warning>}
        <Button type="submit">Registration</Button>
      </form>
    </div>
  );
};
