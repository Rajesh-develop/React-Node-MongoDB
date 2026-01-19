import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "../components/AddUser.jsx";
import UserList from "../components/UserList.jsx";
import HeroSection from "../components/HeroSection.jsx";


function App() {
  return (
    <HeroSection/>
    // <Router>
    //   <Routes>
    //     <HeroSection/>
    //     <Route path="/" element={<AddUser />} />
    //     <Route path="/users" element={<UserList />} />
    //   </Routes>
    // </Router>
    
  );
}

export default App;
