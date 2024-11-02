import React, { useState, useEffect } from 'react';
import logo from '/headerlogo.png';
import PhoneIcon from '@mui/icons-material/Phone';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Define activeDropdown

  // Toggle text color based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight - 100); // Change when leaving the hero section
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <nav
      className={`flex items-center justify-between py-6 px-10 sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'
      }`}
    >
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
        <div
          className={`p-2 rounded-full border ${
            isScrolled ? 'border-black text-black' : 'border-white text-white'
          }`}
        >
          <PhoneIcon fontSize="small" />
        </div>

        {/* Continue Button */}
        <a
          href="/continue"
          className={`px-6 py-3 rounded-full transition-colors ${
            isScrolled ? 'bg-green-primary text-white' : 'bg-green-secondary text-white'
          }`}
        >
          Continue
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
