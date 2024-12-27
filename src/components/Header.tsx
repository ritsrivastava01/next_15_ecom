import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className=' bg-gray-800 border-b border-gray-700 mb-5'>
      <ul className='flex items-center  text-white [&>*]:p-4 max-w-7xl mx-auto'>
        <li className='hover:bg-gray-700 border-b-2  border-gray-800 hover:border-white'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:bg-gray-700 hover:border-b-2'>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
