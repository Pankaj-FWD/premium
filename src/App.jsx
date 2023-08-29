import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegistrationForm from "./pages/registration/RegistrationForm";
import Login from "./pages/login/Login";
import Dashboard from "./components/admin/dashboard";
import MemberDashboard from "./components/member/memberDashboard";
import ResetPassword from "./components/member/ResetPassword";
import { getUserFromLocalStorage } from "./utills/authUtils";

const App = () => {
  // Check if user is in local storage
  const user = getUserFromLocalStorage();
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="premium" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="login" element={<Login />} />
		
        {user ? (
          <>
            {user.accType === "Admin" && (
              <Route path="admin-dashboard" element={<Dashboard />} />
            )}
            {user.accType === "User" && (
              <Route path="user-dashboard" element={<MemberDashboard />} />
            )}
            {user.accType === "User" && (
              <Route path="/user-dashboard/reset-password" element={<ResetPassword />} />
            )}
          </>
        ) : (
          <></>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
