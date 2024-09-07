import React from "react";
import { clock, locationImage, phoneImage } from "../constants";

const UpNavbar = () => {
  return (
    <div className="bg-black text-slate-100 p-4">
      <div className="flex justify-between items-center p-2">
        <div className="hidden md:block w-1/2"></div>
        <div className="w-full md:w-1/2">
          <ul className="flex flex-wrap justify-center lg:justify-end space-x-4">
            <li className="flex items-center space-x-2">
              <span>{locationImage}</span>
              <span className="text-xl">Sydney, Australia</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>{phoneImage}</span>
              <span className="text-xl">0468328227</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>{clock}</span>
              <span className="text-xl">Mon - Fri: 9:00am - 5:00pm</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>{clock}</span>
              <span className="text-xl">Weekends Appointments Only</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UpNavbar;
