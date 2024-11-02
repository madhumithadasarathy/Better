import React, { useState, useEffect } from 'react';
import logoWhite from '/headerlogo.png'; // Initial white logo
import logoBlack from '/betterblack.png'; // Scrolled black logo

const Navbar = () => {
  const [isSticking, setIsSticking] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticking(window.scrollY > 50); // Adjust threshold as needed
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
    <header
      className={`primary-header ${
        isSticking ? 'sticking bg-white' : 'bg-green-primary'
      } transition-all duration-500 sticky top-0 z-50`}
    >
      <div className="wrapper mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          {/* Conditionally render logo based on scroll state */}
          <span className="logo">
            <img
              src={isSticking ? logoBlack : logoWhite}
              alt="LOGO"
              className="h-8"
            />
          </span>

          {/* Menu Items */}
          <ul className="nav-list flex space-x-8">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className={`transition-colors duration-300 ${
                    isSticking ? 'text-black' : 'text-white'
                  }`}
                >
                  {item.title}
                </button>

                {/* Dropdown Menu */}
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
              </li>
            ))}
          </ul>
        </div>

        {/* Continue Button */}
        <a
          href="/continue"
          className="px-6 py-3 rounded-full transition-colors bg-green-secondary text-black"
        >
          Continue
        </a>
      </div>
    </header>
  );
};

export default Navbar;
