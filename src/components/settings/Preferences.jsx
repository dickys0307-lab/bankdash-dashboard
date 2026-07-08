import React from 'react';
import InputField from './InputField';
import ToggleSwitch from './ToggleSwitch';

const Preferences = ({ preferences, setPreferences, formData, handleChange }) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="col-span-2">
        <InputField
          label="Currency"
          select
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          options={[
            { value: 'usd', label: 'USD' }
          ]}
        />
      </div>
      <div className="col-span-2">
        <InputField
          label="Time Zone"
          select
          name="timezone"
          value={formData.timezone}
          onChange={handleChange}
          options={[
            { value: 'gmt-12', label: '(GMT-12:00) International Date Line West' }
          ]}
        />
      </div>
      <div className="col-span-2 mt-4">
        <p className="text-sm font-semibold text-gray-800 mb-4">Notification</p>
        <div className="space-y-5">
          <ToggleSwitch
            isOn={preferences.digitalCurrency}
            onToggle={() => setPreferences(prev => ({ ...prev, digitalCurrency: !prev.digitalCurrency }))}
            label="I send or receive digital currency"
          />
          <ToggleSwitch
            isOn={preferences.merchantOrder}
            onToggle={() => setPreferences(prev => ({ ...prev, merchantOrder: !prev.merchantOrder }))}
            label="I receive merchant order"
          />
          <ToggleSwitch
            isOn={preferences.recommendations}
            onToggle={() => setPreferences(prev => ({ ...prev, recommendations: !prev.recommendations }))}
            label="There are recommendation for my account"
          />
        </div>
      </div>
    </div>
  );
};

export default Preferences;
