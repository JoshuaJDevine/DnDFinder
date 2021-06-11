import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import {signUp} from "../../../store/session";
import "./signupModal.css"

export default function SignUpModalForm({setShowModal}){
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
        const data = await dispatch(signUp(username, email, password));
        if (data.errors) {
            setErrors(data.errors)
        }
        else {
            setShowModal(false);
        }
    }
    else {
        setErrors(["Passwords do not match"])
    }

  };
    const handleCancel = () => {
        setShowModal(false);
    }
  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <form onSubmit={onSignUp}>
      <div className="DnD__LoginFormModal--errors">
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className="DnD__SignupFormModal--ButtonGroup">
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className="DnD__SignupFormModal--ButtonGroup">
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className="DnD__SignupFormModal--ButtonGroup">
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className="DnD__SignupFormModal--ButtonGroup">
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div className="DnD__Button--glow">
          <div className="DnD_Button--sign fx1" onClick={onSignUp}>Sign Up</div>
          <div className="DnD_Button--sign fx3" onClick={handleCancel}>Cancel</div>
      </div>
    </form>
  );
};
