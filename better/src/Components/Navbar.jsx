import React, { useState, useEffect } from 'react';
import logoWhite from '/headerlogo.png'; // Initial white logo
import logoBlack from '/betterblack.png'; // Scrolled black logo
import PhoneIcon from '@mui/icons-material/Phone';

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
    {
      title: "Buy",
      dropdownItems: [
        "Apply now",
        "Purchase rates",
        "Affordability calculator",
        "Mortgage calculator",
        "Rent vs buy calculator",
        "Find an agent",
        "VA loans",
        "Learning center",
      ],
    },
    {
      title: "Refinance",
      dropdownItems: [
        "Apply Now",
        "Refinance rates",
        "Cash-out refinance calculator",
        "Learning Center",
      ],
    },
    {
      title: "HELOC",
      dropdownItems: [
        "Apply Now",
        "Calculate your Cash 💵",
        "HELOC vs. Cash-out Refinance",
        "Learning Center",
      ],
    },
    {
      title: "Rates",
      dropdownItems: [
        "Purchase mortgage rates",
        "Refinance rates",
        "Refinance cash-out rates",
        "HELOC rates",
        "Purchase VA rates",
      ],
    },
    {
      title: "Better+",
      dropdownItems: [
        "Get Insurance",
        "Title and Closing",
        "Better Attorney Match",
        "Learning Center",
        "Better Agent Match",
        "For Agents",
        "Better Duo",
        "For Agents",
      ],
    },
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
      <div className="wrapper mx-auto px-12 py-5 flex justify-between items-center">
        <div className="flex items-center space-x-16">
          {/* Conditionally render logo based on scroll state */}
          <span className="logo">
            <img
              src={isSticking ? logoBlack : logoWhite}
              alt="LOGO"
              className="h-8"
            />
          </span>

          {/* Menu Items */}
          <ul className="nav-list flex space-x-16">
            {menuItems.map((item, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className={`transition-colors duration-300 text-md hover:bg-white ${
                    isSticking ? 'text-black' : 'text-white'
                  }`}
                >
                  {item.title}
                </button>

                {/* Dropdown Menu with Increased Width */}
                {activeDropdown === index && (
                  <div className="absolute top-full mt-2 bg-white text-black rounded shadow-lg min-w-[250px]">
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

        {/* Phone Icon and Continue Button */}
        <div className="flex items-center space-x-8">
          {/* Phone Icon with Conditional Styles */}
          <div
            className={`p-2 rounded-full border transition-all duration-300 ${
              isSticking ? 'text-black border-gray-500' : 'text-white border-white'
            } hover:bg-gray-100`}
          >
            <PhoneIcon fontSize="small" />
          </div>

          {/* Continue Button with Conditional Hover Effects */}
          <a
            href="/continue"
            className={`px-6 py-2.5 rounded-full transition-colors ${
              isSticking
                ? 'bg-green-700 text-white hover:bg-green-primary hover:text-white'
                : 'bg-green-secondary text-black hover:bg-transparent hover:text-white'
            }`}
          >
            Continue
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
