import "./App.css";
import React from "react";

// import Container from "@mui/material/Container";

import MediaCard from "./components/Cards";
import SignIn from "./components/SignIn";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./components/Profile";
import Signup from "./components/SignUp";

function App() {
  return (
    <div className="App">
      {/* <Container className="container-main"> */}
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route path="/Details" element={<MediaCard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/SignUp" element={<Signup />} />
        <Route path="/logout" element={<SignIn />} />
        <Route path="/home" element={<MediaCard />} />
      </Routes>

      {/* <MediaCard /> */}
      {/* </Container> */}
    </div>
  );
}

export default App;
