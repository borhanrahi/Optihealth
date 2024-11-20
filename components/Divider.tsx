import React from "react";

const Divider = () => {
  return (
    <div className="w-full h-[120px] flex items-center justify-center px-4 lg:px-0">
      <div className="relative w-full max-w-[1016px] h-[40px]">
        <div className="absolute inset-0 bg-radial-divider opacity-50" />
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-[#2047804D] via-[#204780] to-[#2047804D]" />
      </div>
    </div>
  );
};

export default Divider;
