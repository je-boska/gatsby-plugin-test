import React from 'react';

const Header = () => {
  return (
    <header>
      <ul className='flex gap-6 p-4 bg-teal-900 text-white text-xl'>
        <li>Gatsby</li>
        <li className='border-b'>About</li>
        <li className='border-b'>Projects</li>
      </ul>
    </header>
  );
};

export default Header;
