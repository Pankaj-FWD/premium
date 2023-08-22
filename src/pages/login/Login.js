import React, { useState } from 'react';
import './Login.css'; // Create this CSS file to style the form
import axios from 'axios';
import { loginUser } from '../../utills/api';
import swal from 'sweetalert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [resetIdentifier, setResetIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [resetOtpSent, setResetOtpSent] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
      // Perform login logic here
      const data = {
        email,
        password
      }
       await loginUser(data).then(async(res)=>{
    //   await new Promise(resolve => setTimeout(resolve, 3000)); 
    console.log("--------------------",res)
   if(res.data.data.user.accType === 'Admin'){
      window.location.href = '/admin-dashboard';
   };
   if(res.data.data.user.accType === 'User'){
    window.location.href = '/user-dashboard';
   }
       }).catch((err)=>{
        swal({
            title: 'Login Failed',
            text: 'Invalid email or password',
            icon: 'error',
          });
       })
      
      // Perform any necessary state updates or redirects here
      
  };


  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      // Send OTP for reset logic here
      await axios.post('http://localhost:8000/reset-password', {
        mobileNumber: resetIdentifier,
      });
      setResetOtpSent(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      // Reset password logic here
      await axios.post('http://localhost:8000/reset-password/verify', {
        mobileNumber: resetIdentifier,
        otp,
        newPassword: password,
      });
      setResetSuccess(true);
      // Reset form after resetting password
      setResetIdentifier('');
      setOtp('');
      setResetOtpSent(false);
      setIsForgotPassword(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      {!isForgotPassword ? (
        <div className="login-form">
          <h2>Login to Account</h2>
          <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        <button type="submit">Login</button>
          </form>
          <p>
            <a href="#" onClick={() => setIsForgotPassword(true)}>
              Forgot your password?
            </a>
          </p>
        </div>
      ) : (
        <div className="login-form">
          {!resetOtpSent ? (
            <form onSubmit={handleForgotPassword}>
              <h2>Forgot Password</h2>
              <div className="form-group">
                <label>Mobile Number:</label>
                <input
                  type="tel"
                  value={resetIdentifier}
                  onChange={(e) => setResetIdentifier(e.target.value)}
                  required
                  style={{ width: '100%', padding: '10px',borderRadius: '5px' }}
                />
                
              </div>
              <button type="submit">Send Reset OTP</button>
            </form>
          ) : (
            <form onSubmit={handleResetPassword}>
              <h2>Enter OTP</h2>
              <div className="form-group">
                <label>OTP:</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>New Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Reset Password</button>
            </form>
          )}
          {resetSuccess && <p>Password reset successful!</p>}
        </div>
      )}
    </div>
  );
};

export default Login;
