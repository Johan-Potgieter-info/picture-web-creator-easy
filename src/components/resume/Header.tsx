
import React from 'react';

const Header = () => {
  return (
    <div className="bg-resume-orange text-white p-6 pb-8">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex items-center justify-center w-16 h-16 border-2 border-white rounded-md">
            <span className="font-bold text-xl">J|P</span>
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">JOHAN POTGIETER</h1>
            <p className="opacity-90">Director of Sales & Operations | National Sales Operations Manager</p>
            <p className="text-sm opacity-80">Nationality: South African | Driver's License: Code 08</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
