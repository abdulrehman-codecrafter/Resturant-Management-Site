import React, { useContext, useState } from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { AuthContext } from "../../Contexts/AuthContext";

const initialState = { email: "", password: "" };
export default function login() {

  const {dispatch}=useContext(AuthContext)

  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const handleChange = (e) =>
    setState((preState) => ({ ...preState, [e.target.name]: e.target.value }));

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const { email, password } = state;
    if (!email || !password) {
      return toast.error("Fill All Credentials");
    }
    const userFound = users.find((user) => {
      return user.email === email && user.password === password;
    });
    if (!userFound) {
      return toast.error("Invalid User Name or Password");
    } else {
      console.log('user', userFound)
      dispatch({type:"SET_LOGGED_IN"})
      localStorage.setItem("isLoggedIn","true")
      localStorage.setItem("loggedUser",JSON.stringify(userFound))
      navigate("/");
    }
  };
  return (
    <div className="auth-container">
      <Toaster position="top-right" richColors />

      <div className="auth-form">
        <h2 className="mb-4">Login</h2>
        <form action="" onSubmit={handleLogin}>
          <div className="input-group rounded-3">
            <Input
              className="input px-3"
              type="email"
              name="email"
              id="email"
              placeholder=""
              onChange={handleChange}
              value={state.email}
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
              onChange={handleChange}
              value={state.password}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="submit-btn text-center mt-4">
            <input
              type="submit"
              className="btn px-5 text-white"
              value="Login"
            />
          </div>
        </form>
        <div className="toggle mt-3 text-center">
          <p>
            Don't Have an Account{" "}
            <Link to="/auth/register" className="ms-1">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
