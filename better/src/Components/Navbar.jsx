import React, { useState } from 'react';
import logo from '/headerlogo.png';
import PhoneIcon from '@mui/icons-material/Phone';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { title: "Buy", dropdownItems: ["Page1", "Page2", "Page3"] },
    { title: "Refinance", dropdownItems: ["Page1", "Page2"] },
    { title: "HELOC", dropdownItems: ["Page1"] },
    { title: "Rates", dropdownItems: ["Page1", "Page2"] },
    { title: "Better+", dropdownItems: ["Page1", "Page2", "Page3"] },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="flex items-center justify-between py-6 px-10 bg-green-primary text-white">
      {/* Logo and Menu Items */}
      <div className="flex items-center space-x-10">
        <div className="flex-shrink-0">
          <img src={logo} alt="Better" className="h-8" />
        </div>
        
        {/* Menu Items */}
        <div className="flex items-center space-x-10">
          {menuItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Button to toggle dropdown on click */}
              <button 
                onClick={() => toggleDropdown(index)}
                className="hover:text-green-300"
              >
                {item.title}
              </button>

              {/* Dropdown menu */}
              {activeDropdown === index && (
                <div className="absolute top-full mt-2 bg-white text-black rounded shadow-lg">
                  {item.dropdownItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href={`/${subItem.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Phone Icon and Continue Button */}
      <div className="flex items-center space-x-4">
        {/* Phone Icon with Border */}
        <div className="p-2 rounded-full border border-white flex items-center justify-center">
          <PhoneIcon fontSize="small" className="text-white" />
        </div>

        {/* Continue Button */}
        <a
          href="/continue"
          className="bg-green-secondary hover:bg-green-600 text-white px-6 py-3 rounded-full"
        >
          Continue
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
