import React from 'react';
import xis_logo from '../../assets/xis_logo.svg';

const Navbar: React.FC = () => {
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        borderBottomColor: 'rgba(255, 255, 255, 0.07)',
      }}
      className="flex  w-full border-b-2 px-14 py-4 "
    >
      <img src={xis_logo} alt="logo" className="w-[90px] h-[33px]" />
    </div>
  );
};

export default Navbar;
