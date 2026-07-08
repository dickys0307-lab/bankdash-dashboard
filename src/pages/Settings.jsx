import React, { useState, useEffect } from 'react';
import { FaSearch, FaBell, FaCalendarAlt } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import TabNavigation from '../components/settings/TabNavigation';
import EditProfile from '../components/settings/EditProfile';
import Preferences from '../components/settings/Preferences';
import Security from '../components/settings/Security';
import useForm from '../hooks/useForm';

const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('editProfile');
  const [profilePhoto, setProfilePhoto] = useState(() => {
    // Load profile photo from localStorage on initial mount
    const saved = localStorage.getItem('settingsProfilePhoto');
    if (saved) return saved;
    return "https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20woman%20avatar%20portrait%20business%20headshot&image_size=square";
  });
  const [preferences, setPreferences] = useState(() => {
    // Load preferences from localStorage on initial mount
    const saved = localStorage.getItem('settingsPreferences');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {
          digitalCurrency: true,
          merchantOrder: false,
          recommendations: false
        };
      }
    }
    return {
      digitalCurrency: true,
      merchantOrder: false,
      recommendations: false
    };
  });
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(() => {
    // Load 2FA setting from localStorage on initial mount
    const saved = localStorage.getItem('settingsTwoFactor');
    return saved ? JSON.parse(saved) : true;
  });

  // Form for Edit Profile tab with localStorage persistence
  const {
    values: editProfileValues,
    handleChange: editProfileChange,
    handleSubmit: handleEditProfileSubmit,
    isLoading: isEditLoading
  } = useForm({
    fullName: 'Charlene Reed',
    userName: 'Charlene Reed',
    email: 'charlenereed@gmail.com',
    password: '********',
    dateOfBirth: '1990-01-25',
    presentAddress: 'San Jose, California, USA',
    permanentAddress: 'San Jose, California, USA',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA'
  }, 'settingsEditProfile');

  // Form for Preferences tab with localStorage persistence
  const {
    values: preferencesValues,
    handleChange: preferencesChange
  } = useForm({
    currency: 'usd',
    timezone: 'gmt-12'
  }, 'settingsPreferencesForm');

  // Form for Security tab with localStorage persistence
  const {
    values: securityValues,
    handleChange: securityChange
  } = useForm({
    currentPassword: '********',
    newPassword: '********'
  }, 'settingsSecurityForm');

  // Save profile photo to localStorage whenever it changes
  useEffect(() => {
    if (profilePhoto) {
      localStorage.setItem('settingsProfilePhoto', profilePhoto);
    }
  }, [profilePhoto]);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('settingsPreferences', JSON.stringify(preferences));
  }, [preferences]);

  // Save 2FA setting to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('settingsTwoFactor', JSON.stringify(twoFactorEnabled));
  }, [twoFactorEnabled]);

  // Combined save handler based on active tab
  const handleSave = (e) => {
    e.preventDefault();
    if (activeTab === 'editProfile') {
      handleEditProfileSubmit((data) => {
        console.log('=== Edit Profile Data Saved ===');
        console.log(data);
        console.log('Profile Photo:', profilePhoto);
        alert('Profile updated successfully! Check console for details.');
      })(e);
    } else if (activeTab === 'preferences') {
      console.log('=== Preferences Saved ===');
      console.log({ ...preferencesValues, ...preferences });
      alert('Preferences saved! Check console for details.');
    } else if (activeTab === 'security') {
      console.log('=== Security Settings Saved ===');
      console.log({ ...securityValues, twoFactorEnabled });
      alert('Security settings saved! Check console for details.');
    }
  };

  const tabs = [
    { id: 'editProfile', label: 'Edit Profile' },
    { id: 'preferences', label: 'Preferences' },
    { id: 'security', label: 'Security' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'editProfile':
        return (
          <EditProfile
            formData={editProfileValues}
            handleChange={editProfileChange}
            profilePhoto={profilePhoto}
            setProfilePhoto={setProfilePhoto}
          />
        );
      case 'preferences':
        return (
          <Preferences
            preferences={preferences}
            setPreferences={setPreferences}
            formData={preferencesValues}
            handleChange={preferencesChange}
          />
        );
      case 'security':
        return (
          <Security
            twoFactorEnabled={twoFactorEnabled}
            setTwoFactorEnabled={setTwoFactorEnabled}
            formData={securityValues}
            handleChange={securityChange}
          />
        );
      default:
        return null;
    }
  };

  const isLoading = isEditLoading;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - EXACTLY the same as other pages */}
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content - EXACT padding and layout as other pages */}
      <div className="md:ml-[260px] p-4 md:p-8 pt-16 md:pt-8">
        {/* Header - EXACTLY the same as other pages */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold text-gray-800">Setting</h2>
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="flex items-center bg-white rounded-xl px-4 py-2.5 shadow-sm border border-gray-100 flex-1 md:flex-none">
              <FaSearch className="text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search for something"
                className="ml-3 border-none outline-none text-sm text-gray-600 w-full bg-transparent"
              />
            </div>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50">
              <FaCalendarAlt className="text-gray-600 text-sm" />
            </div>
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 cursor-pointer hover:bg-gray-50">
              <FaBell className="text-gray-600 text-sm" />
            </div>
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-gray-200 shadow-sm">
              <img
                src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=professional%20woman%20avatar%20portrait%20business%20headshot&image_size=square"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Content Container - White with rounded corners */}
        <form onSubmit={handleSave} className="bg-white rounded-2xl p-4 md:p-7 shadow-sm">
          {/* Tab Navigation */}
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

          {/* Tab Content */}
          <div className="mb-8">
            {renderTabContent()}
          </div>

          {/* Save Button - Right bottom corner */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="px-10 py-2 bg-blue-700 text-white text-sm font-semibold rounded-xl hover:bg-blue-800 transition-colors shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
