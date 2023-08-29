import React, { useState } from "react";
import "./reset-password.css";
import { useNavigate } from "react-router-dom";
import MemberSidebar from "./memberSidebar";

const ResetPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();

  const handleOldPasswordChange = (event) => {
    const newOldPassword = event.target.value;
    setOldPassword(newOldPassword);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);
  };

  const getPasswordStrength = () => {
    if (password.length === 0) {
      return "";
    }

    // Password strength criteria
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

    if (password.length < 5) {
      return "Weak";
    } else if (password.length < 7) {
      return "Moderate";
    } else {
      if (hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
        return "Strong";
      } else {
        return "Moderate";
      }
    }
  };

  const isFormValid = () => {
    return password && confirmPassword && password === confirmPassword;
  };

  const machPass = () => {
    return  password === confirmPassword;
  };

  return (
    <>
    <div className="reset-password-container">
    {/* <MemberSidebar /> */}
      <h2>Reset Password</h2>
      <div className="password-form">
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={handleOldPasswordChange}
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        <div className={`password-strength ${getPasswordStrength().toLowerCase()}`}>
          {getPasswordStrength()}
        </div>
        {!machPass()?<div className="password-mismatch">Password did not match!</div>:""}
        <button className="reset-button" disabled={!isFormValid()}>
          Reset Password
        </button>
        <button className="cancel-button" onClick={() => navigate("/user-dashboard")}>
         Back
        </button>
      </div>
    </div>
    </>
  );
};

export default ResetPassword;
