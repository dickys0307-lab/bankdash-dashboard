import React, { useRef } from 'react';
import { FaCamera } from 'react-icons/fa';
import InputField from './InputField';

const EditProfile = ({ formData, handleChange, profilePhoto, setProfilePhoto }) => {
  const fileInputRef = useRef(null);

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert file to base64 for localStorage persistence
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePhoto(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10">
      {/* Profile Photo */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={handlePhotoClick}
            type="button"
            className="absolute -bottom-2 -right-2 w-7 h-7 bg-blue-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800"
          >
            <FaCamera className="text-white text-xs" />
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />
        </div>
      </div>

      {/* Form Fields */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
        <InputField
          label="Your Name"
          placeholder="Enter your name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <InputField
          label="User Name"
          placeholder="Enter username"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <InputField
          label="Email"
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          placeholder="********"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <InputField
          label="Date of Birth"
          select
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          options={[
            { value: '1990-01-25', label: '25 January 1990' }
          ]}
        />
        <InputField
          label="Present Address"
          placeholder="Enter address"
          name="presentAddress"
          value={formData.presentAddress}
          onChange={handleChange}
        />
        <InputField
          label="Permanent Address"
          placeholder="Enter permanent address"
          name="permanentAddress"
          value={formData.permanentAddress}
          onChange={handleChange}
        />
        <InputField
          label="City"
          placeholder="Enter city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <InputField
          label="Postal Code"
          placeholder="Enter postal code"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
        />
        <InputField
          label="Country"
          placeholder="Enter country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default EditProfile;
