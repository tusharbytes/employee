import React from 'react';

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 rounded-full blur-sm bg-blue-500 opacity-30 animate-ping"></div>
      </div>
    </div>
  );
}

export default Loader;
