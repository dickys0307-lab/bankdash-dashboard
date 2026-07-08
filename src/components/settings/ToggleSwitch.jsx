import React from 'react';

const ToggleSwitch = ({ isOn, onToggle, label, subLabel }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        {label && <p className="text-sm font-medium text-gray-800">{label}</p>}
        {subLabel && <p className="text-xs text-gray-500">{subLabel}</p>}
      </div>
      <button
        onClick={onToggle}
        className={`w-12 h-6 rounded-full transition-colors relative ${
          isOn ? 'bg-teal-400' : 'bg-gray-200'
        }`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform shadow-sm ${
            isOn ? 'left-[26px]' : 'left-0.5'
          }`}
        ></div>
      </button>
    </div>
  );
};

export default ToggleSwitch;
