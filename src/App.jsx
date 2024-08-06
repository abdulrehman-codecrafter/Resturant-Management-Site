import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Routes from "../src/pages/Routes"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { AuthContext } from "./Contexts/AuthContext";
import ScreenLoader from "./components/ScreenLoader"

function App() {
  const {isAppLoading,setIsAppLoading}=useContext(AuthContext)

  if(isAppLoading){
    return <ScreenLoader />
  }

  return (
    <>
      <Routes></Routes>
    </>
  );
}

export default App;
