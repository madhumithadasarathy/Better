import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '/headerlogo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Buy", dropdownItems: ["Page1", "Page2", "Page3"] },
    { title: "Refinance", dropdownItems: ["Page1", "Page2"] },
    { title: "HELOC", dropdownItems: ["Page1"] },
    { title: "Rates", dropdownItems: ["Page1", "Page2"] },
    { title: "Better+", dropdownItems: ["Page1", "Page2", "Page3"] },
  ];

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-green-900 text-white">
      <img src={logo} alt="Better" className="h-8" />

      <div className="flex items-center space-x-8">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group">
            <button className="hover:text-green-300">{item.title}</button>
            <div className="hidden group-hover:block absolute top-full mt-2 bg-white text-black rounded shadow-lg">
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
          </div>
        ))}

        <button 
          onClick={() => navigate('/continue')}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Continue
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
