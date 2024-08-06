import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { Toaster, toast } from "sonner";

const initialState = { userName: "", email: "", password: "" };
const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;

export default function Register() {
  const [state, setState] = useState(initialState);

  const handleChange = (e) =>
    setState((preState) => ({ ...preState, [e.target.name]: e.target.value }));

  const handleRegistration = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users"))||[];
    const { userName, email, password } = state;

    // if (!userName || !email || !password) {
    //   return toast.error("Fill All Credentials");
    // }
    if (userName.length < 3) {
      return toast.error("Invalid User Name");
    }
    if(!regex.test(email)){
      return toast.error("Invalid Email")
    }
    if (password.length < 6) {
      return toast.error("Password Length Must be Greater Than 6");
    }
    
    let alreadyRegisteredUser = users.find((user) => {
      return user.email === email;
    });
    if (alreadyRegisteredUser) {
      return toast.error("User Already Registered");
    }

    let user = {
      userName,
      email,
      password,
      user_id: Math.random().toString(36).slice(2),
    };

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    setState(initialState);
    toast.success("Users Registered Successfully");
  };

  return (
    <div className="auth-container">
      <Toaster position="top-right" richColors />
      <div className="auth-form">
        <h2 className="mb-4">Register</h2>
        <form action="" onSubmit={handleRegistration}>
          <div className="input-group rounded-3">
            <Input
              className="input px-3"
              type="text"
              name="userName"
              id="userName"
              placeholder=""
              value={state.userName}
              onChange={handleChange}
            />
            <label htmlFor="userName">User Name</label>
          </div>
          <div className="input-group rounded-3">
            <Input
              className="input px-3"
              type="email"
              name="email"
              id="email"
              placeholder=""
              value={state.email}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-group rounded-3">
            <Input
              className="input px-3"
              type="password"
              name="password"
              id="password"
              placeholder=""
              value={state.password}
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="submit-btn text-center mt-4">
            <input
              type="submit"
              className="btn px-5 text-white"
              value="Register"
            />
          </div>
        </form>
        <div className="toggle mt-3 text-center">
          <p>
            Already Have an Account{" "}
            <Link to="/auth/login" className="ms-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
