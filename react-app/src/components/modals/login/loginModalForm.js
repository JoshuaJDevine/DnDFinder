import React, {useState} from "react";
import "./loginModalForm.css"

import {useDispatch, useSelector} from "react-redux";
import {deleteMyEvent} from "../../../store/event";
import {login} from "../../../store/session";
import {Redirect} from "react-router-dom";

export default function LoginModalForm({setShowModal}){
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


    const updateEmail = (e) => {
        setEmail(e.target.value);
    };
    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    if (user) {
        return <Redirect to="/" />;
    }

    const handleCancel = () => {
        setShowModal(false);
    }
    const handleOK = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data.errors) {
            setErrors(data.errors);
        }
        else {
            setShowModal(false);
        }
    }
    return (
    <form onSubmit={handleOK}>
      <div className="DnD__LoginFormModal--ButtonGroup">
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className="DnD__LoginFormModal--ButtonGroup">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className="DnD__LoginFormModal--ButtonGroup">
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div className="glow-dark">
        <button type="submit">Login</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>

    </form>
  );
}