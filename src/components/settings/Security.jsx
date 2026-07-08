import React from 'react';
import InputField from './InputField';
import ToggleSwitch from './ToggleSwitch';

const Security = ({ twoFactorEnabled, setTwoFactorEnabled, formData, handleChange }) => {
  return (
    <div>
      <div className="mb-8">
        <ToggleSwitch
          isOn={twoFactorEnabled}
          onToggle={() => setTwoFactorEnabled(!twoFactorEnabled)}
          label="Two-factor Authentication"
          subLabel="Enable or disable two factor authentication"
        />
      </div>

      <div>
        <p className="text-xs font-semibold text-gray-800 mb-4">Change Password</p>
        <div className="flex flex-col gap-5">
          <InputField
            label="Current Password"
            type="password"
            placeholder="********"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
          />
          <InputField
            label="New Password"
            type="password"
            placeholder="********"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
