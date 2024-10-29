'use client';

import { useState } from 'react';

function Dropdown() {

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const items = [
    { name: 'All', href: '#all' },
    { name: 'Deposit', href: '#deposit' },
    { name: 'Withdraw', href: '#withdraw' },
    { name: 'Transfer', href: '#transfer' },
    { name: 'By Date', href: '#bydate' },
  ];

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );



  return (

    <div className="relative inline-block">
    <button
      onClick={toggleDropdown}
      className="bg-gray-600 text-white px-4 py-2 text-lg border-none cursor-pointer hover:bg-gray-700 focus:bg-gray-500 rounded"
    >
      Hello
    </button>
    {isOpen && (
      <div className="absolute bg-gray-100 min-w-[230px] border border-gray-300 z-10 mt-2 rounded shadow-lg">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-3 pl-10 border-b border-gray-300 outline-none text-base bg-[url('/searchicon.png')] bg-no-repeat bg-[14px_12px]"
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="max-h-48 overflow-auto">
          {filteredItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block p-3 text-black hover:bg-gray-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
  )
}

export default Dropdown



