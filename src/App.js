import logo from "./logo.svg";
import "./App.css";
import Home from "../src/pages/home";
import { Route,Routes } from "react-router-dom";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-details/:user_id" element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;
