import React from 'react';

const InputField = ({ label, type = 'text', placeholder, name, value, onChange, select = false, options = [] }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-500 font-medium">{label}</label>
      {select ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="px-4 py-2.5 border border-gray-100 rounded-xl bg-white text-sm text-gray-800 outline-none focus:border-blue-200"
        >
          {options.map((opt, i) => (
            <option key={i} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          className="px-4 py-2.5 border border-gray-100 rounded-xl bg-white text-sm text-gray-800 outline-none focus:border-blue-200"
        />
      )}
    </div>
  );
};

export default InputField;
