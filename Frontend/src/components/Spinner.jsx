import React from 'react';

const Spinner = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-20">
      <div className="animate-ping w-16 h-16 rounded-full bg-blue-400"></div>
    </div>
  );
};

export default Spinner;
