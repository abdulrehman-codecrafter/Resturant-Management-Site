import React, { useCallback } from "react";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";

export const AuthContext = createContext();

const initialState = { isAuth: false };

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_LOGGED_IN":
      // console.log('type', type)
      return { isAuth: true };
    case "SET_LOGGED_OUT":
      return initialState;
    default:
      return state;
  }
};

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      dispatch({ type: "SET_LOGGED_IN" });
    }
  }, []);

  const readProfile = useCallback(() => {
    setTimeout(() => {
      setIsAppLoading(false);
    }, 500);
  }, []);
  useEffect(() => {
    readProfile();
  }, [readProfile]);

  return (
    <AuthContext.Provider
      value={{ ...state, dispatch, isAppLoading, setIsAppLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
