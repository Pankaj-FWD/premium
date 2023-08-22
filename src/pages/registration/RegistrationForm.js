import React, { useState } from 'react';
import './RegistrationForm.css';
import DumbbellLoader from '../../loader/DumbbellLoader';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import swal from 'sweetalert';
import { registerUser } from '../../utills/api';


const RegistrationForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-','Not sure'];

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    const formData = new FormData(); // Create a new FormData object
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('address', address);
    formData.append('bloodGroup', bloodGroup);
    formData.append('weight', weight);
    formData.append('height', height);
    formData.append('age', age);
    formData.append('selectedPlan', selectedPlan);
    formData.append('image', image); // Append the image file to the FormData
  
      await registerUser(formData).then((res) => {
        swal({
          title: 'Done!',
          text: res.data.message,
          icon: 'success',
          buttons: {
            confirm: {
              text: 'OK',
              value: 'OK',
            },
          },
        }).then((value) => {
          if (value === 'OK') {
            window.location.href = '/';
          }
        });
      }).catch((err)=>{
        swal({
          title: 'Registration Failed',
          text: err.response.data.message,
          icon: 'error',
        });
      }).finally(()=>{
        setIsLoading(false);
      })
  };
  
  

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const fileSize = selectedImage.size / 1024; // in KB
      if (fileSize >= 20 && fileSize <= 200) {
        setImage(selectedImage);
        setImageError('');
      } else {
        setImage(null);
        setImageError('Image size must be between 20 KB and 200 KB');
      }
    }
  };
  return (
    isLoading?<DumbbellLoader />:
    <div className="registration-form">
      <h2>Register for a Membership Plan</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
        <label>
  Select Plan: <span><a href='/plans' style={{ textDecoration: 'underline', color: '#fff' }}>Click here to know more about plans</a></span>
</label>
          <div>
            <label>
              <input
                type="radio"
                value="silver"
                checked={selectedPlan === 'silver'}
                onChange={(e) => setSelectedPlan(e.target.value)}
                required
              />
              Silver Plan (₹500/mo)
            </label>
            <label>
              <input
                type="radio"
                value="gold"
                checked={selectedPlan === 'gold'}
                onChange={(e) => setSelectedPlan(e.target.value)}
                required
              />
              Gold Plan (₹1500/mo)
            </label>
            <label>
              <input
                type="radio"
                value="platinum"
                checked={selectedPlan === 'platinum'}
                onChange={(e) => setSelectedPlan(e.target.value)}
                required
              />
              Platinum Plan (₹4500/mo)
            </label>
          </div>
        </div>
        <div>
          <label>Upload Photo :  .
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          </label>
          {imageError && <p className="error-message">{imageError}</p>}
        </div>
        <div className="input-group">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
            required
          />
        </div>
        <div className="input-group">
        <DatePicker
            selected={age}
            onChange={date => setAge(date)}
            placeholderText="DD/MM/YYYY"
            dateFormat="dd/MM/yyyy"
            maxDate={new Date()}
          />
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight (kg)"
          />
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height (cm)"
          />
        </div>
        <div className="input-group">
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="Address"
          />
        </div>
        <div className="input-group">
          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            required
          >
            <option value="" disabled>Select Blood Group</option>
            {bloodGroups.map((group, index) => (
              <option key={index} value={group}>{group}</option>
            ))}
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
