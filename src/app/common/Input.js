"use client"
import React from 'react';
import { useDarkMode } from './UseTogleContext';

export default function Input({ label, type = 'text', placeholder, value, onChange, name, error }) {
        const { darkMode, setDarkMode } = useDarkMode();
  
  return (
    <div className="mb-4  space-y-1">
      {label && <label className={`block text-sm font-medium text-gray-700 ${darkMode ? "bg-black text-white" : "bg-white"}`}>{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        }`}
        
      />
      {error && <span className="text-red-500 inline-block text-sm">{error}</span>}
    </div>
  );
}
