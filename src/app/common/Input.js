import React from 'react';

export default function Input({ label, type = 'text', placeholder, value, onChange, name,error  }) {
  return (
    <div className="mb-4 space-y-2">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
        {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}
